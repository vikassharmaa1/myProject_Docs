/* Replace these example values with your real public YouTube URLs before publishing. */
const channelLinks = {
  channel: "https://www.youtube.com/@amvivaan",
    episode1: "https://www.youtube.com/watch?v=ZiqvZkrYohc&t=4s",
    episode2: "https://www.youtube.com/watch?v=5GSo3nNdGeo&t=269s",
  playlist: "https://www.youtube.com/playlist?list=PLemVn3pza2QY"
};

for (const element of document.querySelectorAll("[data-link]")) {
  const key = element.dataset.link;
  const url = channelLinks[key] || "";
  const isPlaceholder = !url || /YOUR_[A-Z_]+/.test(url);
  if (isPlaceholder) {
    element.hidden = true;
    continue;
  }
  element.href = url;
  element.target = "_blank";
  element.rel = "noopener noreferrer";
  element.hidden = false;
}

for (const hint of document.querySelectorAll("[data-link-hint]")) {
  const key = hint.dataset.linkHint;
  const url = channelLinks[key] || "";
  hint.hidden = Boolean(url && !/YOUR_[A-Z_]+/.test(url));
}
