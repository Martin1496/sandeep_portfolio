# Sandeep Dusadh — Developer Portfolio

A responsive multipage portfolio built with Next.js, React, TypeScript, and CSS. It includes project case studies with screenshots, services, an about page, a tools page, and contact details.

## Run locally

Install Node.js 22 or newer, then run:

```bash
npm ci
npm run dev
```

Open http://localhost:3000. Before pushing changes, run `npm run lint`, `npm run typecheck`, and `npm run build`.

On Windows, extract the ZIP into a new folder. If `npm ci` reports `EPERM`, close running Node processes and editors using the old `node_modules` folder, then run it again in the new folder.

## Edit the portfolio

- `lib/portfolio.ts` contains projects, services, and technology groups. Add an entry to the `projects` array to create another project card and detail route.
- `app/` contains the pages, metadata, sitemap, and robots configuration.
- `components/portfolio/` contains navigation, cards, and contact UI.
- `public/projects/` contains the cropped project screenshots.
- `public/SandeepDusadh_Resume.pdf` is the downloadable résumé. Check its personal details before publishing a public repository.

The form prepares an email in the visitor's mail application. It **does not** send messages by itself. A backend or email service is needed for direct form delivery. Project screenshots show development builds or earlier demos; their captions explain each project's stage.

## Deploy and SEO

Set `NEXT_PUBLIC_SITE_URL` to the final public origin (without a trailing slash). For local development it defaults to `http://localhost:3000`. A sample is in `.env.example`.

```bash
cp .env.example .env.local
```

On Windows PowerShell, use `Copy-Item .env.example .env.local` and edit the URL. Set the same environment variable on your hosting platform before a production build. The value is used for canonical URLs, structured data, and the sitemap.

The source does not contain hosting credentials. Do not commit `.env.local`, API keys, `node_modules`, or `.next`.

## Upload to GitHub

Extract this ZIP, open a terminal **inside `sandeep-portfolio`**, then run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Create an empty repository on GitHub first and replace the example remote URL with its actual HTTPS URL. If you already initialized Git in an older extracted folder, use this clean folder for a fresh first commit. The `.gitattributes` file keeps source line endings consistent on Windows; an occasional Git LF/CRLF message is a formatting notice, not an upload failure.
