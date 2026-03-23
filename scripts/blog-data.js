import { renderMarkdown } from "./markdown.js";
import { formatDate } from "./site.js";

export async function loadPostIndex() {
  const response = await fetch("content/posts/index.json", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Could not load the blog index.");
  }

  const posts = await response.json();
  return posts.sort((left, right) => new Date(right.publishedAt) - new Date(left.publishedAt));
}

export async function loadPostBySlug(slug) {
  const index = await loadPostIndex();
  const postMeta = index.find((entry) => entry.slug === slug);
  if (!postMeta) {
    throw new Error("Post not found.");
  }

  const response = await fetch(`content/posts/${postMeta.file}`, { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Could not load the requested post.");
  }

  return response.json();
}

export function renderPostCard(post) {
  const tags = (post.tags || [])
    .slice(0, 3)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("");

  return `
    <article class="post-card">
      <p class="meta-text">${formatDate(post.publishedAt)}</p>
      <h3>${post.title}</h3>
      <p>${post.summary}</p>
      <div class="tag-row">${tags}</div>
      <a class="post-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Read post</a>
    </article>
  `;
}

export function renderPostListItem(post) {
  const tags = (post.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");
  return `
    <article class="post-list-item">
      <p class="meta-text">${formatDate(post.publishedAt)}</p>
      <h2>${post.title}</h2>
      <p>${post.summary}</p>
      <div class="tag-row">${tags}</div>
      <a class="post-link" href="post.html?slug=${encodeURIComponent(post.slug)}">Open article</a>
    </article>
  `;
}

export function renderFullPost(post) {
  const tags = (post.tags || []).map((tag) => `<span class="tag">${tag}</span>`).join("");

  return `
    <header class="post-header">
      <p class="eyebrow">Blog Post</p>
      <h1>${post.title}</h1>
      <div class="post-meta">
        <span class="meta-text">${formatDate(post.publishedAt)}</span>
        <span class="meta-text">${post.author}</span>
      </div>
      <div class="tag-row">${tags}</div>
    </header>
    <div class="rich-copy">${renderMarkdown(post.body)}</div>
  `;
}
