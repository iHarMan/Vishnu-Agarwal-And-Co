# Vishnu Agarwal And Co. Website

React landing/about page for Vishnu Agarwal And Co., a gemstone and jewellery business with product catalogue imagery for coral, pearls, emeralds, morganite, and multi-sapphire collections.

## Tech Stack

- React
- Vite
- CSS
- lucide-react icons

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Deploying on Vercel

This project is ready for Vercel as a static Vite site.

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project**.
4. Import the GitHub repository.
5. Use these settings:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

6. Click **Deploy**.

Vercel will automatically deploy again whenever changes are pushed to the connected GitHub branch.

### Optional Custom Domain

After deployment, open the Vercel project, go to **Settings → Domains**, and add the business domain. Vercel will show the DNS records that need to be added wherever the domain was purchased.

## Project Structure

```text
.
├── public/
│   └── catalogue/        # Extracted product catalogue images
├── src/
│   ├── main.jsx          # React app and page content
│   └── styles.css        # Responsive site styling
├── index.html
├── package.json
└── README.md
```

## Editing Content

Most visible content is in `src/main.jsx`:

- `productLines` controls product cards and catalogue imagery.
- `values` controls the three trust/value blocks.
- `catalogueImages` controls the horizontal catalogue preview strip.
- The contact CTA currently uses `mailto:info@example.com`; replace it with the business email or preferred inquiry URL before launch.

## Notes

The product visuals were extracted from the provided catalogue PDF and placed under `public/catalogue`. Keep image filenames stable unless you also update the references in `src/main.jsx`.
