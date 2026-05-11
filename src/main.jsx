import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Gem,
  MapPin,
  Menu,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import './styles.css';

const productLines = [
  {
    name: 'Coral',
    description:
      'Carefully selected coral strands, beads, and necklace layouts with rich colour and clean finishing.',
    image: '/catalogue/catalogue-01.jpg',
    tone: 'coral',
  },
  {
    name: 'Emeralds',
    description:
      'Green gemstone strands and statement beadwork sourced for brilliance, depth, and consistency.',
    image: '/catalogue/catalogue-09.jpg',
    tone: 'emerald',
  },
  {
    name: 'Pearls',
    description:
      'Freshwater and cultured pearl strands in classic whites, blush tones, and refined natural textures.',
    image: '/catalogue/catalogue-20.jpg',
    tone: 'pearl',
  },
  {
    name: 'Multi-Sapphire',
    description:
      'Vivid multicolour sapphire strands for distinctive jewellery with strong visual character.',
    image: '/catalogue/catalogue-17.jpg',
    tone: 'sapphire',
  },
  {
    name: 'Morganite',
    description:
      'Soft pink morganite strands with polished cuts for elegant contemporary and occasion jewellery.',
    image: '/catalogue/catalogue-13.jpg',
    tone: 'morganite',
  },
];

const values = [
  {
    icon: ShieldCheck,
    title: 'Authentic Sourcing',
    copy: 'Every selection is guided by experience, market knowledge, and a commitment to genuine gemstones.',
  },
  {
    icon: BadgeCheck,
    title: 'Quality First',
    copy: 'Products are chosen for colour, finish, consistency, and long-term jewellery value.',
  },
  {
    icon: Sparkles,
    title: 'Custom Requirements',
    copy: 'The team supports premium sourcing and customized gemstone needs with personal attention.',
  },
];

const catalogueImages = [
  '/catalogue/catalogue-02.jpg',
  '/catalogue/catalogue-03.jpg',
  '/catalogue/catalogue-04.jpg',
  '/catalogue/catalogue-10.jpg',
  '/catalogue/catalogue-11.jpg',
  '/catalogue/catalogue-18.jpg',
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Vishnu Agarwal And Co. home">
          <span className="brand-mark">VA</span>
          <span>
            <strong>Vishnu Agarwal</strong>
            <small>And Co.</small>
          </span>
        </a>
        <button
          className="menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Primary navigation">
          <a onClick={closeMenu} href="#about">
            About
          </a>
          <a onClick={closeMenu} href="#products">
            Products
          </a>
          <a onClick={closeMenu} href="#founder">
            Founder
          </a>
          <a onClick={closeMenu} href="#contact">
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-media" aria-hidden="true">
            <img src="/catalogue/catalogue-01.jpg" alt="" />
            <img src="/catalogue/catalogue-20.jpg" alt="" />
            <img src="/catalogue/catalogue-09.jpg" alt="" />
          </div>
          <div className="hero-copy">
            <p className="eyebrow">Fine gemstones since 1998</p>
            <h1>Vishnu Agarwal And Co.</h1>
            <p>
              A trusted gemstone house with 28 years of expertise in corals, pearls,
              emeralds, and refined jewellery sourcing across Jaipur and Bengaluru.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#products">
                View Products <ArrowRight size={18} />
              </a>
              <a className="button secondary" href="#about">
                Our Legacy
              </a>
            </div>
          </div>
          <div className="trust-strip" aria-label="Company highlights">
            <span>28 years of industry experience</span>
            <span>Jaipur and Bengaluru presence</span>
            <span>Corals, pearls, emeralds and fine gemstones</span>
          </div>
        </section>

        <section className="section intro-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About us</p>
            <h2>Built on authenticity, quality, and customer relationships.</h2>
          </div>
          <div className="intro-copy">
            <p>
              Vishnu Agarwal And Co. is known for carefully selected gemstones that
              combine elegance, value, and timeless craftsmanship. With deep expertise
              in precious stones, the company serves customers with transparent
              dealings and personalized attention.
            </p>
            <p>
              The business has established a strong presence in key jewellery markets,
              allowing it to support a diverse clientele across India and beyond with
              reliable gemstone sourcing and customized requirements.
            </p>
          </div>
        </section>

        <section className="value-band" aria-label="Business values">
          {values.map(({ icon: Icon, title, copy }) => (
            <article className="value-item" key={title}>
              <div className="icon-wrap">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </section>

        <section className="section products-section" id="products">
          <div className="section-heading narrow">
            <p className="eyebrow">Product range</p>
            <h2>Gemstone selections for classic and custom jewellery.</h2>
          </div>
          <div className="product-grid">
            {productLines.map((item) => (
              <article className={`product-card ${item.tone}`} key={item.name}>
                <div className="product-image">
                  <img src={item.image} alt={`${item.name} catalogue selection`} loading="lazy" />
                </div>
                <div className="product-copy">
                  <Gem size={20} />
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section founder-section" id="founder">
          <div className="founder-panel">
            <div>
              <p className="eyebrow">About the founder</p>
              <h2>Vishnu Agarwal</h2>
            </div>
            <p>
              Vishnu Agarwal is a passionate entrepreneur and gemstone specialist with
              a keen eye for quality and authenticity. Backed by 28 years of industry
              experience, he has built the company around trust, ethical practices, and
              long-term customer relationships.
            </p>
            <p>
              His expertise in corals, pearls, emeralds, and fine gemstones continues
              to guide the company’s focus on beauty, value, and professional service.
            </p>
          </div>
          <div className="market-card">
            <MapPin size={26} />
            <h3>Serving key jewellery markets</h3>
            <p>
              A strong presence in Jaipur and Bengaluru helps the company cater to
              customers, jewellery houses, and custom sourcing needs across regions.
            </p>
          </div>
        </section>

        <section className="catalogue-strip" aria-label="Catalogue preview">
          {catalogueImages.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`Catalogue product preview ${index + 1}`}
              loading="lazy"
            />
          ))}
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">Work with us</p>
            <h2>Premium sourcing with transparent guidance.</h2>
            <p>
              For gemstone sourcing, jewellery requirements, or curated product
              selections, connect with the Vishnu Agarwal And Co. team in Jaipur or
              Bengaluru.
            </p>
          </div>
          <a className="button primary dark" href="mailto:info@example.com">
            Start an Inquiry <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <footer>
        <span>Vishnu Agarwal And Co.</span>
        <span>Fine gemstones, corals, pearls, emeralds, and jewellery sourcing.</span>
      </footer>
    </>
  );
}

export default App;

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
