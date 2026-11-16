# Leap of French

Website for Priya Raghuraman's one-on-one French tuition: **https://leap-of-french.com**

Built with Vite, React and TypeScript, and hosted on GitHub Pages.

## Editing the content

Nearly all the text on the site (lessons, FAQ, testimonials, contact details, the WhatsApp message) is in
[`src/content.ts`](src/content.ts). Change it there; you rarely need to touch the components.

## Running locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Deploying

```bash
npm run deploy     # builds to dist/ and publishes it to the gh-pages branch
```

`public/CNAME` keeps the custom domain attached on every deploy.
