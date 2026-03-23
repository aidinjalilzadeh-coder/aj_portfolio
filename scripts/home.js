import { loadPostIndex, renderPostCard } from "./blog-data.js";
import { initSite, setStatus } from "./site.js";

async function initHomePage() {
  initSite("index.html");

  const featuredPosts = document.getElementById("featured-posts");
  if (!featuredPosts) {
    return;
  }

  try {
    const posts = await loadPostIndex();
    if (posts.length === 0) {
      featuredPosts.innerHTML = `<div class="status-card">No posts yet.</div>`;
      return;
    }

    featuredPosts.innerHTML = posts.slice(0, 2).map(renderPostCard).join("");
  } catch (error) {
    featuredPosts.innerHTML = "";
    const fallback = document.createElement("div");
    fallback.className = "status-card status-error";
    setStatus(fallback, error.message, "error");
    featuredPosts.append(fallback);
  }
}

initHomePage();
