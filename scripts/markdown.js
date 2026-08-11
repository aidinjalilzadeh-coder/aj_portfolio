function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// Preserve HTML tags from being escaped
function preserveHtml(content) {
  const htmlBlocks = [];
  let preserved = content.replace(/<[^>]+>/g, (match) => {
    const placeholder = `__HTML_${htmlBlocks.length}__`;
    htmlBlocks.push(match);
    return placeholder;
  });
  return { preserved, htmlBlocks };
}

// Restore HTML tags after escaping
function restoreHtml(content, htmlBlocks) {
  let restored = content;
  htmlBlocks.forEach((block, i) => {
    restored = restored.replace(`__HTML_${i}__`, block);
  });
  return restored;
}

function extractMathSegments(text) {
  const segments = [];
  let output = "";
  let index = 0;

  while (index < text.length) {
    if (text[index] !== "$") {
      output += text[index];
      index += 1;
      continue;
    }

    const delimiter = text[index + 1] === "$" ? "$$" : "$";
    const nextCharacter = text[index + delimiter.length];
    if (delimiter === "$" && (!nextCharacter || /\s/.test(nextCharacter))) {
      output += text[index];
      index += 1;
      continue;
    }

    const start = index;
    let cursor = index + delimiter.length;
    let end = -1;

    while (cursor < text.length) {
      if (text[cursor] === "\\") {
        cursor += 2;
        continue;
      }

      if (delimiter === "$$") {
        if (text[cursor] === "$" && text[cursor + 1] === "$") {
          end = cursor + 2;
          break;
        }
      } else if (text[cursor] === "\n") {
        break;
      } else if (text[cursor] === "$" && !/\s/.test(text[cursor - 1] || "")) {
        end = cursor + 1;
        break;
      }

      cursor += 1;
    }

    if (end === -1) {
      output += text[index];
      index += 1;
      continue;
    }

    const placeholder = `@@MATH${segments.length}@@`;
    segments.push(normalizeMathSegment(text.slice(start, end)));
    output += placeholder;
    index = end;
  }

  return { text: output, segments };
}

// ✅ FIXED
function normalizeMathSegment(segment) {
  let normalized = segment.replace(/\\_(?=[A-Za-z0-9{])/g, "_");
  // Preserve ALL backslashes that start a LaTeX command
  normalized = normalized.replace(/\\([a-zA-Z]+)/g, "\\\\$1");
  return normalized;
}

function restoreMathSegments(text, segments) {
  return text.replace(/@@MATH(\d+)@@/g, (match, index) => segments[Number(index)] || match);
}

function parseInline(text) {
  // Step 1: Preserve HTML tags
  const { preserved, htmlBlocks } = preserveHtml(text);
  
  // Step 2: Escape the non-HTML parts
  const escaped = escapeHtml(preserved);
  
  // Step 3: Apply markdown formatting
  let processed = escaped
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" style="max-width:100%; height:auto;">')
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
  
  // Step 4: Restore HTML tags
  return restoreHtml(processed, htmlBlocks);
}

function renderParagraph(text) {
  return `<p>${parseInline(text)}</p>`;
}

function isCodeFenceLine(line) {
  return line.trimStart().startsWith("```");
}

function getHeadingMatch(line) {
  return line.match(/^\s*(#{1,4})\s+(.*)$/);
}

function isBlockBoundary(line) {
  return (
    !line.trim() ||
    Boolean(getHeadingMatch(line)) ||
    line.trimStart().startsWith("> ") ||
    /^\s*\d+\.\s+/.test(line) ||
    /^\s*-\s+/.test(line) ||
    isCodeFenceLine(line)
  );
}

function renderList(items, ordered) {
  const tag = ordered ? "ol" : "ul";
  const rendered = items.map((item) => `<li>${parseInline(item)}</li>`).join("");
  return `<${tag}>${rendered}</${tag}>`;
}

function parseYamlScalar(value) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  if (trimmed === "true") {
    return true;
  }

  if (trimmed === "false") {
    return false;
  }

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    return trimmed
      .slice(1, -1)
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean)
      .map((item) => parseYamlScalar(item));
  }

  return trimmed;
}

export function parseFrontMatter(markdown) {
  const normalized = markdown.replace(/\r\n/g, "\n");
  if (!normalized.startsWith("---\n")) {
    return {
      data: {},
      body: normalized.trim(),
    };
  }

  const lines = normalized.split("\n");
  const closingIndex = lines.findIndex((line, index) => index > 0 && line.trim() === "---");
  if (closingIndex === -1) {
    return {
      data: {},
      body: normalized.trim(),
    };
  }

  const data = {};
  let index = 1;

  while (index < closingIndex) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!keyMatch) {
      index += 1;
      continue;
    }

    const key = keyMatch[1];
    const rest = keyMatch[2];

    if (!rest) {
      const items = [];
      index += 1;

      while (index < closingIndex && /^\s*-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*-\s+/, ""));
        index += 1;
      }

      data[key] = items;
      continue;
    }

    data[key] = parseYamlScalar(rest);
    index += 1;
  }

  return {
    data,
    body: lines.slice(closingIndex + 1).join("\n").trim(),
  };
}

export function renderMarkdown(markdown) {
  if (!markdown || !markdown.trim()) {
    return "<p>No content yet.</p>";
  }

  const { text: markdownWithPlaceholders, segments: mathSegments } = extractMathSegments(
    markdown.replace(/\r\n/g, "\n"),
  );
  const lines = markdownWithPlaceholders.split("\n");
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (isCodeFenceLine(line)) {
      const buffer = [];
      index += 1;
      while (index < lines.length && !isCodeFenceLine(lines[index])) {
        buffer.push(lines[index]);
        index += 1;
      }
      index += 1;
      blocks.push(`<pre><code>${escapeHtml(buffer.join("\n"))}</code></pre>`);
      continue;
    }

    const headingMatch = getHeadingMatch(line);
    if (headingMatch) {
      const level = headingMatch[1].length;
      blocks.push(`<h${level}>${parseInline(headingMatch[2])}</h${level}>`);
      index += 1;
      continue;
    }

    if (line.trimStart().startsWith("> ")) {
      const quoteLines = [];
      while (index < lines.length && lines[index].trimStart().startsWith("> ")) {
        quoteLines.push(lines[index].trimStart().slice(2));
        index += 1;
      }
      blocks.push(`<blockquote>${quoteLines.map(parseInline).join("<br />")}</blockquote>`);
      continue;
    }

    const orderedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
    if (orderedMatch) {
      const items = [];
      while (index < lines.length) {
        const itemMatch = lines[index].match(/^\s*\d+\.\s+(.*)$/);
        if (!itemMatch) {
          break;
        }
        items.push(itemMatch[1]);
        index += 1;
      }
      blocks.push(renderList(items, true));
      continue;
    }

    if (/^\s*-\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\s*-\s+/.test(lines[index])) {
        items.push(lines[index].replace(/^\s*-\s+/, ""));
        index += 1;
      }
      blocks.push(renderList(items, false));
      continue;
    }

    const paragraphLines = [];
    while (index < lines.length && lines[index].trim()) {
      if (paragraphLines.length > 0 && isBlockBoundary(lines[index])) {
        break;
      }
      paragraphLines.push(lines[index].trim());
      index += 1;
    }
    blocks.push(renderParagraph(paragraphLines.join(" ")));
  }

  return restoreMathSegments(blocks.join("\n"), mathSegments);
}

export function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
