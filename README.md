# Aidin Jalilzadeh Portfolio

Static academic portfolio designed for GitHub Pages.

## Included pages

- `index.html`: home page with headshot and resume download.
- `videos.html`: latest 10 uploads from a configured YouTube channel.
- `blog.html`: public blog index.
- `post.html`: individual post reader.
- `admin.html`: GitHub-backed publishing panel for new blog posts.

## GitHub Pages deployment

1. Create or use the target repo under the `mdbailin` account.
2. Push these files to the repository.
3. In GitHub, open `Settings > Pages`.
4. Set the source to `Deploy from a branch`.
5. Choose the branch, typically `main`, and `/ (root)`.

If the repo name changes, update `scripts/config.js`:

```js
github: {
  owner: "mdbailin",
  repo: "aj_portfolio",
  branch: "main",
  contentDir: "content/posts",
}
```

## YouTube feed setup

Add Aidin's YouTube channel details in `scripts/config.js`:

```js
youtube: {
  channelId: "YOUR_CHANNEL_ID",
  channelUrl: "https://www.youtube.com/@yourhandle",
}
```

The videos page uses the public channel RSS feed and renders the latest 10 uploads.

## Admin publishing setup

The admin page works entirely from the browser, so it uses a GitHub personal access token instead of a custom backend.

Required token access:

- Repository access to the portfolio repo
- `Contents: Read and write`

Publishing flow:

1. Open `admin.html`.
2. Log in with GitHub username, repo, branch, and token.
3. Write the post in Markdown.
4. Publish.

Each publish creates:

- `content/posts/<slug>.json`
- `content/posts/index.json`

GitHub Pages may take a short time to reflect the new commit.

## Local preview

Serve the folder with a small static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
