# Tohar Hermon · Portfolio

Modern, dark-themed portfolio for **Tohar Hermon**, a Computer Engineer with experience across software development, security operations and cloud-aware systems.

Built with:

- **Next.js** (App Router, TypeScript ready)
- **Tailwind CSS** for styling
- **Lucide-react** for icons

> Note: This project was scaffolded manually (not via `create-next-app`) so you can control dependency versions yourself.

## Getting started

From this folder:

1. Install dependencies (choosing versions that match your environment):

   ```bash
   npm install next react react-dom \
     tailwindcss postcss autoprefixer \
     typescript @types/react @types/node \
     lucide-react
   ```

2. Initialize Tailwind (if you want to regenerate config):

   ```bash
   npx tailwindcss init -p
   ```

3. Run the dev server:

   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` to view the portfolio.

## Customization

- Main page content lives in `app/page.tsx`
- Global styling and theme tokens are in `app/globals.css` and `tailwind.config.mjs`
- SEO metadata and base layout are in `app/layout.tsx`

