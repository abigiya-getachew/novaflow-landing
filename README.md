# NovaFlow

A responsive SaaS landing page built with React, Vite, Tailwind CSS, and Lucide icons. It includes a light-first theme with an optional dark mode, a responsive navigation menu, pricing and product-preview sections, FAQ accordions, and a demo request form.

## Create a project

```bash
npm create vite@latest novaflow -- --template react
cd novaflow
npm install
npm install tailwindcss @tailwindcss/vite lucide-react
```

Copy the NovaFlow source files into the project, then run the development server:

```bash
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Deploy

For example, deploy to Vercel after installing or using its CLI:

```bash
npx vercel
npx vercel --prod
```

Alternatively, publish the contents of `dist/` with any static hosting provider.

## Notes

The demo request form currently validates required fields and displays the requested success message in the browser. Connect its submit handler in `src/components/Contact.jsx` to a form service or application endpoint before collecting real requests.
