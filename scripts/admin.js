import SITE_CONFIG from "./config.js";
import { loadPostIndex } from "./blog-data.js";
import { renderMarkdown, slugify } from "./markdown.js";
import { initSite, setStatus } from "./site.js";

const SESSION_KEY = "aidin-portfolio-admin-session";

function encodeBase64(value) {
  return btoa(unescape(encodeURIComponent(value)));
}

function decodeBase64(value) {
  return decodeURIComponent(escape(atob(value)));
}

function getStoredSession() {
  try {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function setStoredSession(session) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

function clearStoredSession() {
  localStorage.removeItem(SESSION_KEY);
}

function getContentApiUrl(session, path) {
  const encodedPath = path
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/");
  return `https://api.github.com/repos/${session.owner}/${session.repo}/contents/${encodedPath}`;
}

async function githubRequest(session, path, options = {}) {
  const response = await fetch(path, {
    ...options,
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${session.token}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!response.ok) {
    let message = "GitHub request failed.";
    try {
      const payload = await response.json();
      message = payload.message || message;
    } catch {
      // Ignore invalid JSON payloads from GitHub.
    }
    throw new Error(message);
  }

  return response.status === 204 ? null : response.json();
}

async function verifySession(session) {
  await githubRequest(session, `https://api.github.com/repos/${session.owner}/${session.repo}`);
}

async function fetchRemoteIndex(session) {
  const url = `${getContentApiUrl(session, `${SITE_CONFIG.github.contentDir}/index.json`)}?ref=${encodeURIComponent(
    session.branch,
  )}`;

  try {
    const payload = await githubRequest(session, url, { method: "GET" });
    const parsed = JSON.parse(decodeBase64(payload.content));
    return {
      posts: parsed,
      sha: payload.sha,
    };
  } catch (error) {
    if (error.message === "Not Found") {
      return { posts: [], sha: null };
    }
    throw error;
  }
}

async function putFile(session, path, content, message, sha = null) {
  const body = {
    branch: session.branch,
    message,
    content: encodeBase64(content),
  };
  if (sha) {
    body.sha = sha;
  }

  return githubRequest(session, getContentApiUrl(session, path), {
    method: "PUT",
    body: JSON.stringify(body),
  });
}

function setSessionDefaults(form) {
  form.owner.value = SITE_CONFIG.github.owner;
  form.repo.value = SITE_CONFIG.github.repo;
  form.branch.value = SITE_CONFIG.github.branch;
}

function updateLoginStatus(element, session) {
  if (!session) {
    setStatus(element, "No active admin session.");
    return;
  }

  setStatus(
    element,
    `Logged in to ${session.owner}/${session.repo} on ${session.branch}.`,
    "success",
  );
}

function renderPreview(form, preview) {
  const title = form.title.value.trim() || "Untitled post";
  const summary = form.summary.value.trim();
  const body = form.body.value.trim();

  preview.innerHTML = `
    <header class="post-header">
      <p class="eyebrow">Preview</p>
      <h1>${title}</h1>
      <div class="post-meta">
        <span class="meta-text">${new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date())}</span>
        <span class="meta-text">${SITE_CONFIG.profile.name}</span>
      </div>
    </header>
    <p class="meta-text">${summary}</p>
    <div class="rich-copy">${renderMarkdown(body)}</div>
  `;
}

async function initAdminPage() {
  initSite("admin.html");

  const loginForm = document.getElementById("login-form");
  const publishForm = document.getElementById("publish-form");
  const loginStatus = document.getElementById("login-status");
  const publishStatus = document.getElementById("publish-status");
  const previewBody = document.getElementById("preview-body");
  const logoutButton = document.getElementById("logout-button");

  setSessionDefaults(loginForm);
  publishForm.addEventListener("input", () => renderPreview(publishForm, previewBody));
  renderPreview(publishForm, previewBody);

  let currentSession = getStoredSession();
  updateLoginStatus(loginStatus, currentSession);

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const session = {
      owner: formData.get("owner").trim(),
      repo: formData.get("repo").trim(),
      branch: formData.get("branch").trim(),
      token: formData.get("token").trim(),
    };

    setStatus(loginStatus, "Verifying repository access...");

    try {
      await verifySession(session);
      currentSession = session;
      setStoredSession(session);
      updateLoginStatus(loginStatus, session);
    } catch (error) {
      currentSession = null;
      clearStoredSession();
      setStatus(loginStatus, error.message, "error");
    }
  });

  logoutButton.addEventListener("click", () => {
    currentSession = null;
    clearStoredSession();
    updateLoginStatus(loginStatus, null);
  });

  publishForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!currentSession) {
      setStatus(publishStatus, "Log in to GitHub before publishing.", "error");
      return;
    }

    const formData = new FormData(publishForm);
    const title = formData.get("title").trim();
    const summary = formData.get("summary").trim();
    const body = formData.get("body").trim();
    const tags = formData
      .get("tags")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
    const slug = slugify(title);

    if (!slug) {
      setStatus(publishStatus, "A valid post title is required.", "error");
      return;
    }

    setStatus(publishStatus, "Publishing to GitHub...");

    try {
      const [{ posts, sha }, localIndex] = await Promise.all([
        fetchRemoteIndex(currentSession),
        loadPostIndex().catch(() => []),
      ]);

      const mergedIndex = Array.isArray(posts) && posts.length > 0 ? posts : localIndex;
      if (mergedIndex.some((entry) => entry.slug === slug)) {
        throw new Error("A post with this slug already exists. Change the title and try again.");
      }

      const timestamp = new Date().toISOString();
      const fileName = `${slug}.json`;
      const post = {
        title,
        slug,
        summary,
        body,
        tags,
        author: SITE_CONFIG.profile.name,
        publishedAt: timestamp,
      };

      const nextIndex = [
        {
          slug,
          file: fileName,
          title,
          summary,
          tags,
          author: SITE_CONFIG.profile.name,
          publishedAt: timestamp,
        },
        ...mergedIndex,
      ].sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt));

      await putFile(
        currentSession,
        `${SITE_CONFIG.github.contentDir}/${fileName}`,
        JSON.stringify(post, null, 2),
        `Add blog post: ${title}`,
      );

      await putFile(
        currentSession,
        `${SITE_CONFIG.github.contentDir}/index.json`,
        JSON.stringify(nextIndex, null, 2),
        `Update blog index for: ${title}`,
        sha,
      );

      publishForm.reset();
      renderPreview(publishForm, previewBody);
      setStatus(
        publishStatus,
        "Post published. GitHub Pages may take a short time to reflect the new content.",
        "success",
      );
    } catch (error) {
      setStatus(publishStatus, error.message, "error");
    }
  });
}

initAdminPage();
