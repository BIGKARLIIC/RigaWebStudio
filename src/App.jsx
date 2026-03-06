import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../logo.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Business sites",
    body:
      "Sharper homepages, cleaner offers, and contact routes that make a business feel established quickly.",
    wide: true
  },
  {
    id: "02",
    title: "Launch pages",
    body:
      "Lean sales pages with better pacing, less noise, and more pressure in the right places."
  },
  {
    id: "03",
    title: "Visual systems",
    body:
      "Type, spacing, motion, and component logic that stop the brand from looking rented."
  },
  {
    id: "04",
    title: "Growth layer",
    body:
      "Room for case studies, quote capture, testimonials, and search pages once the first version is live."
  }
];

const steps = [
  ["01", "Cut it down", "Strip the message to what matters, then build around that."],
  ["02", "Build the path", "Design the reading flow before decoration starts showing off."],
  ["03", "Sharpen the feel", "Dial in type, depth, restraint, and motion until the page feels expensive."],
  ["04", "Open the lines", "Email, phone, and Facebook all stay one move away."]
];

const contactCards = [
  ["Email", "rigawebstudio@gmail.com", "mailto:rigawebstudio@gmail.com"],
  ["Phone", "+371 28 780 935", "tel:+37128780935"]
];

const signalItems = [
  "Business websites",
  "Landing pages",
  "Modern UI systems",
  "Contact-first structure",
  "Responsive builds"
];

function App() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-copy > *",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out"
        }
      );

      gsap.fromTo(
        ".hero-stage > *",
        { y: 60, opacity: 0, rotateX: -12 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.18
        }
      );

      gsap.utils.toArray(".reveal-section").forEach((section) => {
        gsap.fromTo(
          section,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 84%"
            }
          }
        );
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="page-shell" ref={rootRef}>
      <div className="noise" aria-hidden="true" />
      <div className="ambient ambient-left" aria-hidden="true" />
      <div className="ambient ambient-right" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav shell">
          <a className="brand" href="#top" aria-label="Riga Web Studio home">
            <img src={logo} alt="Riga Web Studio logo" />
            <span>Riga Web Studio</span>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#system">System</a>
            <a href="#presence">Presence</a>
            <a href="#contact">Contact</a>
          </div>

          <a className="nav-cta magnetic" href="mailto:rigawebstudio@gmail.com">
            Start by email
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">Riga web design and launch systems</p>
            <h1>Quiet. Sharp. Ready.</h1>
            <p className="hero-lede">
              Websites for businesses that are done looking unfinished. Clean offer,
              faster contact, harder visual standards.
            </p>

            <div className="hero-actions">
              <a className="button magnetic" href="mailto:rigawebstudio@gmail.com">
                Write to the studio
              </a>
              <a className="text-link" href="tel:+37128780935">
                Call +371 28 780 935
              </a>
              <a
                className="text-link"
                href="https://www.facebook.com/people/Riga-Web-Studio/61586430456555/"
                target="_blank"
                rel="noreferrer"
              >
                Message on Facebook
              </a>
            </div>

            <div className="hero-ledger">
              <article>
                <strong>3</strong>
                <span>live contact lanes</span>
              </article>
              <article>
                <strong>4</strong>
                <span>core build modules</span>
              </article>
              <article>
                <strong>100%</strong>
                <span>responsive by default</span>
              </article>
            </div>
          </div>

          <div className="hero-stage">
            <article className="stage-panel stage-panel-large">
              <p className="card-label">Studio note</p>
              <h2>Apple calm. Samsung gloss. Google clarity.</h2>
              <p>
                The surface stays premium and restrained, but the structure stays useful.
                No fake startup energy. No limp brochure layout.
              </p>
            </article>

            <article className="stage-panel stage-panel-logo">
              <img src={logo} alt="Riga Web Studio logo" />
            </article>

            <article className="stage-panel stage-panel-stack">
              <p className="card-label">What clients get</p>
              <ul>
                <li>Business websites</li>
                <li>Launch pages</li>
                <li>Sharper digital presence</li>
                <li>Direct contact flow</li>
              </ul>
            </article>

            <article className="stage-panel stage-panel-contact">
              <p className="card-label">Direct line</p>
              <a href="mailto:rigawebstudio@gmail.com">rigawebstudio@gmail.com</a>
              <a href="tel:+37128780935">+371 28 780 935</a>
            </article>

            <article className="stage-panel stage-panel-colors">
              <p className="card-label">Accent logic</p>
              <div className="accent-row">
                <span className="accent blue" />
                <span className="accent green" />
                <span className="accent yellow" />
                <span className="accent red" />
              </div>
              <p>Mostly monochrome. Tiny sparks of signal color. Just enough.</p>
            </article>
          </div>
        </section>

        <section className="signal-strip">
          <div className="signal-track">
            {[...signalItems, ...signalItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section section-services">
          <div className="shell services-layout">
            <div className="section-copy reveal-section" id="services">
              <p className="eyebrow">What lands</p>
              <h2>Built to hold up.</h2>
              <p>
                The work is not about piling on features. It is about making the business
                feel more serious the second someone lands on the page.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <article
                  key={service.id}
                  className={`service-card reveal-section${service.wide ? " service-card-wide" : ""}`}
                >
                  <span>{service.id}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </article>
              ))}

              <article className="service-quote reveal-section">
                <p>Good websites do not need to shout. They need to feel inevitable.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-system">
          <div className="shell system-layout">
            <div className="system-copy reveal-section" id="system">
              <p className="eyebrow">How it runs</p>
              <h2>Less drag. More shape.</h2>
            </div>

            <div className="system-steps">
              {steps.map(([id, title, body]) => (
                <article className="system-step reveal-section" key={id}>
                  <span>{id}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-presence">
          <div className="shell presence-layout">
            <article className="presence-intro reveal-section" id="presence">
              <p className="eyebrow">Public presence</p>
              <h2>More than one door.</h2>
              <p>
                The website becomes the clean home base. Email handles decisions. Phone
                handles speed. Facebook stays useful for quick starts.
              </p>
            </article>

            {contactCards.map(([label, value, href]) => (
              <article className="presence-card reveal-section" key={label}>
                <p className="card-label">{label}</p>
                <a href={href}>{value}</a>
              </article>
            ))}

            <article className="presence-card reveal-section">
              <p className="card-label">Facebook</p>
              <a
                href="https://www.facebook.com/people/Riga-Web-Studio/61586430456555/"
                target="_blank"
                rel="noreferrer"
              >
                Open business page
              </a>
            </article>

            <article className="presence-card presence-card-wide reveal-section">
              <p className="card-label">Public line</p>
              <h3>Launch fast. Pay monthly. We handle everything.</h3>
              <p>
                That line came from the public business page. The site now gives it a
                better frame and a stronger landing surface.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-contact">
          <div className="shell contact-layout">
            <div className="contact-copy reveal-section" id="contact">
              <p className="eyebrow">Contact</p>
              <h2>Pick a lane.</h2>
              <p>
                Some clients write first. Some call. Some jump straight into Messenger.
                All good. The point is to make that next step obvious.
              </p>
            </div>

            <div className="contact-actions-grid reveal-section">
              {contactCards.map(([label, value, href]) => (
                <a className="contact-action magnetic" href={href} key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </a>
              ))}

              <a
                className="contact-action contact-action-wide magnetic"
                href="https://www.facebook.com/people/Riga-Web-Studio/61586430456555/"
                target="_blank"
                rel="noreferrer"
              >
                <span>Facebook</span>
                <strong>Message Riga Web Studio</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <div>
          <img src={logo} alt="Riga Web Studio logo" />
          <p>Riga Web Studio</p>
        </div>
        <p>Web presence with a harder edge.</p>
      </footer>
    </div>
  );
}

export default App;
