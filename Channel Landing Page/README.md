# DiamondDash landing page

A lightweight, responsive landing page for the Minecraft Survival Series. It uses the channel logo and Episode 1 thumbnail from the project Artwork folder.

## Add your YouTube links

Open `links.js` and replace the three example values with the public URLs for:

- Your channel (`https://www.youtube.com/@...`)
- Episode 1 (`https://www.youtube.com/watch?v=...`)
- The public Survival Series playlist (`https://www.youtube.com/playlist?list=...`)

Buttons appear automatically after a real URL is added. The page currently uses example placeholders so it does not point viewers to an unrelated channel or video.

## Publish and help Google find it

Upload the contents of this folder to a static website host and use a domain you control. Add the published website URL under **YouTube Studio → Customization → Profile → Links**, and link back to the YouTube channel from the page. Verify the domain in Google Search Console and inspect the landing-page URL to request indexing. Google decides whether and when to index it; indexing is not guaranteed.

When the site has a real public URL, update the Open Graph image URL in `index.html` to its absolute address. Consider adding a custom domain canonical URL then too.

The page is a static HTML/CSS site and can be previewed locally by opening `index.html` in a browser. The small web fonts are loaded from Google Fonts when internet access is available; system fonts are used as a fallback.
