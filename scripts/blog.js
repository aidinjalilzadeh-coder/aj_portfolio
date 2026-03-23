import { loadPostIndex, renderPostListItem } from "./blog-data.js";
import { hideStatus, initSite, setStatus } from "./site.js";

async function initBlogPage() {
  initSite("blog.html");

  const status = document.getElementById("blog-status");
  const blogList = document.getElementById("blog-list");

  try {
    const posts = await loadPostIndex();
    if (posts.length === 0) {
      setStatus(status, "No posts have been published yet.");
      return;
    }

    hideStatus(status);
    blogList.innerHTML = posts.map(renderPostListItem).join("");
  } catch (error) {
    setStatus(status, error.message, "error");
  }
}

initBlogPage();
