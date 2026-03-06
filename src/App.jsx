import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../logo.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Design and build",
    body:
      "A clean static website designed to make the business look more serious and easier to trust.",
    wide: true
  },
  {
    id: "02",
    title: "Deployment",
    body:
      "The site gets deployed properly so you are not left with a design file and a headache."
  },
  {
    id: "03",
    title: "Fast handoff",
    body:
      "Once it is live, it is yours. No bloated setup, no long maintenance chain, no unnecessary complexity."
  },
  {
    id: "04",
    title: "Static by default",
    body:
      "Most client sites are simple, fast, and static, which keeps them lighter, cheaper, and easier to manage."
  }
];

const steps = [
  ["01", "You explain it", "What the business does, who it is for, and how serious it should feel."],
  ["02", "I design it", "The page gets structured, written, and designed to feel clear and credible."],
  ["03", "I build it", "The design gets turned into a fast static site with the right contact flow."],
  ["04", "I deploy it", "The site goes live and the job is done. Clean and simple."]
];

const contactCards = [
  ["Email", "rigawebstudio@gmail.com", "mailto:rigawebstudio@gmail.com"],
  ["Phone", "+371 28 780 935", "tel:+37128780935"]
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
            <p className="eyebrow">Riga Web Studio builds and deploys static websites</p>
            <h1>Websites that sell the first impression.</h1>
            <p className="hero-lede">
              I design the site, build it, deploy it, and hand it over. Most projects
              are simple static websites like this one: fast, clean, and built to turn
              a warm lead into a real enquiry.
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
                <span>ways to get in touch</span>
              </article>
              <article>
                <strong>1</strong>
                <span>clear service offer</span>
              </article>
              <article>
                <strong>100%</strong>
                <span>responsive by default</span>
              </article>
            </div>
          </div>

          <div className="hero-stage">
            <article className="stage-panel stage-panel-large">
              <p className="card-label">What you are buying</p>
              <h2>A good-looking static website that is ready to go live.</h2>
              <p>
                This is not a giant agency retainer. It is a focused website service for
                businesses that need a sharper online presence without dragging the
                project out forever.
              </p>
            </article>

            <article className="stage-panel stage-panel-logo">
              <img src={logo} alt="Riga Web Studio logo" />
            </article>

            <article className="stage-panel stage-panel-stack">
              <p className="card-label">What clients get</p>
              <ul>
                <li>Custom static website</li>
                <li>Modern visual direction</li>
                <li>Mobile-friendly layout</li>
                <li>Live deployment</li>
              </ul>
            </article>

            <article className="stage-panel stage-panel-contact">
              <p className="card-label">Direct line</p>
              <a href="mailto:rigawebstudio@gmail.com">rigawebstudio@gmail.com</a>
              <a href="tel:+37128780935">+371 28 780 935</a>
            </article>

            <article className="stage-panel stage-panel-colors">
              <p className="card-label">Who this fits</p>
              <p>
                Best for businesses that need a polished brochure-style website, not a
                complex app or giant CMS setup.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-services">
          <div className="shell services-layout">
            <div className="section-copy reveal-section" id="services">
              <p className="eyebrow">The offer</p>
              <h2>Simple service. Done properly.</h2>
              <p>
                The point of the page is simple: show what you get, why it is useful,
                and why reaching out is worth it.
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
                <p>A small business site does not need to be complicated. It needs to look right and work immediately.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-system">
          <div className="shell system-layout">
            <div className="system-copy reveal-section" id="system">
              <p className="eyebrow">How it works</p>
              <h2>Short path. Clear outcome.</h2>
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
              <p className="eyebrow">Reach out</p>
              <h2>Pick the easiest option.</h2>
              <p>
                Some people prefer email. Some call. Some start on Facebook. The site
                just makes that choice obvious.
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
              <p className="card-label">Main pitch</p>
              <h3>Ready-made professional websites for businesses.</h3>
              <p>
                That is the real offer here. A polished website that makes the business
                look credible and gets people to make contact.
              </p>
            </article>
          </div>
        </section>

        <section className="section section-contact">
          <div className="shell contact-layout">
            <div className="contact-copy reveal-section" id="contact">
              <p className="eyebrow">Contact</p>
              <h2>Start the conversation.</h2>
              <p>
                If the business needs a cleaner, more professional website, send a message
                and we can keep it simple from there.
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
