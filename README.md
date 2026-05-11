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

Most visible website content is in `src/main.jsx`. The file contains one main React component, `App`, plus a few content arrays at the top of the file. Developers usually only need to edit `src/main.jsx` for copy/content changes and `src/styles.css` for visual styling changes.

### Quick Edit Map

Use this table to find the right place quickly.

| What you want to change | File | Where to edit |
| --- | --- | --- |
| Business name in header | `src/main.jsx` | Header brand inside `<header className="site-header">` |
| Hero headline | `src/main.jsx` | `<section className="hero-section">`, inside `.hero-copy` |
| Hero description | `src/main.jsx` | `<section className="hero-section">`, paragraph below the `<h1>` |
| Hero background images | `src/main.jsx` | `.hero-media` image tags |
| Three highlight/stat lines | `src/main.jsx` | `.trust-strip` spans |
| About us heading and paragraphs | `src/main.jsx` | `<section id="about">` |
| Value blocks | `src/main.jsx` | `values` array |
| Product cards | `src/main.jsx` | `productLines` array |
| Product preview strip | `src/main.jsx` | `catalogueImages` array |
| Founder details | `src/main.jsx` | `<section id="founder">` |
| Location/market details | `src/main.jsx` | `.market-card` inside the founder section |
| Contact section copy | `src/main.jsx` | `<section id="contact">` |
| Contact email or inquiry link | `src/main.jsx` | `<a className="button primary dark" href="mailto:info@example.com">` |
| Footer text | `src/main.jsx` | `<footer>` |
| Page title and meta description | `index.html` | `<title>` and `<meta name="description">` |
| Colors, spacing, layout, mobile behavior | `src/styles.css` | CSS variables and section classes |

### Business Name and Header

The header is inside `src/main.jsx` in the `<header className="site-header">` block.

Current brand text:

```jsx
<strong>Vishnu Agarwal</strong>
<small>And Co.</small>
```

To rename the business, update these two values. Also update the `aria-label` on the brand link if the full company name changes:

```jsx
<a className="brand" href="#top" aria-label="Vishnu Agarwal And Co. home">
```

The `VA` mark is controlled by:

```jsx
<span className="brand-mark">VA</span>
```

### Navigation Links

The navigation is in the same header block:

```jsx
<nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
```

Each menu item links to a section ID:

```jsx
<a href="#about">About</a>
<a href="#products">Products</a>
<a href="#founder">Founder</a>
<a href="#contact">Contact</a>
```

If a new section is added, give the section an `id`, then add a matching nav link. For example:

```jsx
<a onClick={closeMenu} href="#certifications">Certifications</a>
```

Then create a section with:

```jsx
<section id="certifications">...</section>
```

### Hero Section

The hero section is the first large section of the page:

```jsx
<section className="hero-section">
```

Edit the small label here:

```jsx
<p className="eyebrow">Fine gemstones since 1998</p>
```

Edit the main headline here:

```jsx
<h1>Vishnu Agarwal And Co.</h1>
```

Edit the hero paragraph here:

```jsx
<p>
  A trusted gemstone house with 28 years of expertise...
</p>
```

The hero buttons are inside `.hero-actions`:

```jsx
<a className="button primary" href="#products">View Products</a>
<a className="button secondary" href="#about">Our Legacy</a>
```

To change where a button goes, update the `href`. To change the label, update the text between the opening and closing `<a>` tags.

### Hero Background Images

The hero background uses three catalogue images:

```jsx
<div className="hero-media" aria-hidden="true">
  <img src="/catalogue/catalogue-01.jpg" alt="" />
  <img src="/catalogue/catalogue-20.jpg" alt="" />
  <img src="/catalogue/catalogue-09.jpg" alt="" />
</div>
```

To swap an image, put the new image in `public/catalogue`, then update the `src`.

Example:

```jsx
<img src="/catalogue/new-coral-hero.jpg" alt="" />
```

Images inside the `public` folder are referenced from the site root. That means `public/catalogue/example.jpg` becomes:

```text
/catalogue/example.jpg
```

### Highlight Strip

The three highlight lines below the hero are here:

```jsx
<div className="trust-strip" aria-label="Company highlights">
  <span>28 years of industry experience</span>
  <span>Jaipur and Bengaluru presence</span>
  <span>Corals, pearls, emeralds and fine gemstones</span>
</div>
```

Edit the text inside each `<span>`. If adding or removing items, check the layout on mobile and desktop because the strip is styled as a three-column grid on larger screens.

### About Us Section

The About section starts here:

```jsx
<section className="section intro-section" id="about">
```

Edit the section label:

```jsx
<p className="eyebrow">About us</p>
```

Edit the heading:

```jsx
<h2>Built on authenticity, quality, and customer relationships.</h2>
```

Edit the about paragraphs inside:

```jsx
<div className="intro-copy">
  <p>...</p>
  <p>...</p>
</div>
```

Add another paragraph by adding another `<p>...</p>` inside `.intro-copy`.

### Value Blocks

The three value cards are generated from the `values` array near the top of `src/main.jsx`:

```jsx
const values = [
  {
    icon: ShieldCheck,
    title: 'Authentic Sourcing',
    copy: 'Every selection is guided by experience...',
  },
  ...
];
```

To change a value block:

- Update `title` for the card heading.
- Update `copy` for the card body.
- Update `icon` if a different icon is needed.

Icons come from `lucide-react`. If using a new icon, import it at the top of the file:

```jsx
import { ShieldCheck, Award } from 'lucide-react';
```

Then use it in the array:

```jsx
icon: Award,
```

### Product Cards

Product cards are generated from the `productLines` array near the top of `src/main.jsx`:

```jsx
const productLines = [
  {
    name: 'Coral',
    description: 'Carefully selected coral strands...',
    image: '/catalogue/catalogue-01.jpg',
    tone: 'coral',
  },
  ...
];
```

Each product has four fields:

- `name`: Product title shown on the card.
- `description`: Product description shown below the title.
- `image`: Image path from `public/catalogue`.
- `tone`: CSS class used for the colored top border.

Current supported tones are defined in `src/styles.css`:

```css
.product-card.coral
.product-card.emerald
.product-card.pearl
.product-card.sapphire
.product-card.morganite
```

To add a new product, add a new object to `productLines`:

```jsx
{
  name: 'Ruby',
  description: 'Ruby strands and jewellery selections with deep red colour.',
  image: '/catalogue/ruby.jpg',
  tone: 'ruby',
}
```

Then add a matching CSS rule in `src/styles.css`:

```css
.product-card.ruby {
  border-top: 4px solid #9f1d2b;
}
```

### Catalogue Preview Strip

The horizontal image strip below the founder section is controlled by:

```jsx
const catalogueImages = [
  '/catalogue/catalogue-02.jpg',
  '/catalogue/catalogue-03.jpg',
  '/catalogue/catalogue-04.jpg',
  '/catalogue/catalogue-10.jpg',
  '/catalogue/catalogue-11.jpg',
  '/catalogue/catalogue-18.jpg',
];
```

To add images, place them in `public/catalogue`, then add their paths to this array.

To remove images, delete their path from the array. The source image file can remain in `public/catalogue`, but unused images can be removed to reduce project size.

### Founder Section

The founder section starts here:

```jsx
<section className="section founder-section" id="founder">
```

Edit the founder label:

```jsx
<p className="eyebrow">About the founder</p>
```

Edit the founder name:

```jsx
<h2>Vishnu Agarwal</h2>
```

Edit the founder story in the two paragraphs below the heading:

```jsx
<p>
  Vishnu Agarwal is a passionate entrepreneur...
</p>
<p>
  His expertise in corals, pearls, emeralds...
</p>
```

### Location and Market Details

The location/market card is inside the founder section:

```jsx
<div className="market-card">
  <MapPin size={26} />
  <h3>Serving key jewellery markets</h3>
  <p>
    A strong presence in Jaipur and Bengaluru...
  </p>
</div>
```

Update this card when changing location details such as city names, service regions, showroom markets, or customer coverage.

Example:

```jsx
<h3>Serving Jaipur, Bengaluru, and pan-India clients</h3>
<p>
  The company supports jewellery houses, private customers, and custom sourcing
  requirements across India.
</p>
```

### Contact Section

The contact section starts here:

```jsx
<section className="contact-section" id="contact">
```

Edit the label:

```jsx
<p className="eyebrow">Work with us</p>
```

Edit the heading:

```jsx
<h2>Premium sourcing with transparent guidance.</h2>
```

Edit the paragraph:

```jsx
<p>
  For gemstone sourcing, jewellery requirements...
</p>
```

### Contact Email or Inquiry Link

The contact button currently uses a placeholder email:

```jsx
<a className="button primary dark" href="mailto:info@example.com">
  Start an Inquiry <ArrowRight size={18} />
</a>
```

To use a real email address:

```jsx
href="mailto:business@example.com"
```

To include a subject line:

```jsx
href="mailto:business@example.com?subject=Gemstone%20Inquiry"
```

To link to WhatsApp, use:

```jsx
href="https://wa.me/919999999999"
```

Use the full country code and phone number without spaces, plus signs, or dashes.

To link to a contact form, use the form URL:

```jsx
href="https://example.com/contact"
```

### Footer

Footer text is at the bottom of `src/main.jsx`:

```jsx
<footer>
  <span>Vishnu Agarwal And Co.</span>
  <span>Fine gemstones, corals, pearls, emeralds, and jewellery sourcing.</span>
</footer>
```

Update either `<span>` if the business name, product focus, or footer message changes.

### Browser Title and SEO Description

The browser tab title and search/social description are in `index.html`.

Edit the page title here:

```html
<title>Vishnu Agarwal And Co. | Fine Gemstones</title>
```

Edit the meta description here:

```html
<meta
  name="description"
  content="Vishnu Agarwal And Co. is a Jaipur and Bengaluru gemstone business..."
/>
```

Keep the description concise, ideally around 140 to 160 characters.

### Styling and Visual Changes

Most styling is in `src/styles.css`.

Global colors are defined at the top:

```css
:root {
  --ink: #15120f;
  --paper: #fbf7f1;
  --navy: #12243c;
  --ruby: #b43426;
  --emerald: #176b4a;
  --gold: #b4863c;
}
```

Common places to edit:

- Header styling: `.site-header`, `.brand`, `.nav`
- Hero layout: `.hero-section`, `.hero-media`, `.hero-copy`
- About section: `.intro-section`, `.intro-copy`
- Product cards: `.product-grid`, `.product-card`, `.product-image`, `.product-copy`
- Founder section: `.founder-section`, `.founder-panel`, `.market-card`
- Contact section: `.contact-section`
- Mobile styling: media queries near the bottom of the file

After CSS edits, test both desktop and mobile widths.

### Adding New Images

Put new images in:

```text
public/catalogue/
```

Reference them in React like this:

```jsx
image: '/catalogue/new-image.jpg'
```

Do not reference them as `public/catalogue/new-image.jpg` in JSX. Vite serves the `public` folder from the site root.

Recommended image formats:

- `.jpg` for catalogue/product photography
- `.png` for transparent graphics
- `.webp` for optimized web images

Keep image names simple and lowercase:

```text
coral-necklace-01.jpg
pearl-strands-hero.webp
emerald-beads-gallery.jpg
```

### Deployment Workflow After Editing

After making content or style changes:

1. Run the site locally:

```bash
npm run dev
```

2. Check the page in the browser.
3. Run a production build:

```bash
npm run build
```

4. Commit and push changes to GitHub.
5. Vercel will deploy automatically from the connected GitHub repository.

Before pushing, confirm that the contact email, phone/WhatsApp link, and location details are final.

## Notes

The product visuals were extracted from the provided catalogue PDF and placed under `public/catalogue`. Keep image filenames stable unless you also update the references in `src/main.jsx`.
