# Cookly — Lab 2

Four semantic HTML pages based on the Lab 1 design. Shared EJS components,
accessible forms, responsive images, Recipe JSON-LD and i18n preparation.

## Structure

- `*.html` — Home, CookBook, Recipe and Saved.
- `src/components/` — reusable EJS blocks.
- `src/assets/img/` — JPEG and WebP images.
- `src/data/` — demo content; `src/i18n/en.json` — English dictionary.
- `api/db.json` — prepared API data for Lab 4.

## Run

```text
npm install
npm run dev
npm run build
```

In PowerShell, use `npm.cmd`. Publish the generated `dist/` folder for preview.
Lists and forms use static demo data. Styling and live behavior follow in Labs 3–4.
