import { useEffect, useState } from "react";
import logo from "../logo.png";

const menuLinks = [
  ["Services", "#offer"],
  ["Process", "#process"],
  ["Contact", "#contact"]
];

const offerItems = [
  [
    "Static website",
    "A custom brochure-style site that makes the business look cleaner, sharper, and more serious."
  ],
  [
    "Design included",
    "The layout, typography, and visual direction are part of the work. You are not hiring me to fill a template."
  ],
  [
    "Deployment included",
    "I put the site online. You do not get stranded at the finish line with a folder and vague instructions."
  ],
  [
    "That is the service",
    "No giant system. No endless add-ons. Usually just a good static website, deployed properly, and done."
  ]
];

const processItems = [
  ["01", "You explain the business, the tone, and what the site needs to do."],
  ["02", "I shape the layout, write the direction, and design the page."],
  ["03", "I build the static site, make it responsive, and wire the contact flow."],
  ["04", "I deploy it and hand it over cleanly."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        :root {
          --ink: #f4f1ea;
          --muted: rgba(244, 241, 234, 0.72);
          --line: rgba(244, 241, 234, 0.14);
          --glass: rgba(255, 255, 255, 0.06);
          --blue: #6f9fff;
          --green: #7ad0ae;
          --yellow: #f3d26f;
          --red: #ff8a72;
          --body-copy: clamp(1rem, 1.1vw, 1.2rem);
          --meta-copy: clamp(0.72rem, 0.8vw, 0.9rem);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          min-width: 320px;
          color: var(--ink);
          font-family: "Manrope", sans-serif;
          font-size: var(--body-copy);
          background:
            radial-gradient(circle at 16% 18%, rgba(111, 159, 255, 0.14), transparent 22%),
            radial-gradient(circle at 82% 14%, rgba(122, 208, 174, 0.1), transparent 18%),
            radial-gradient(circle at 76% 82%, rgba(243, 210, 111, 0.08), transparent 14%),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.03) 0,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 72px
            ),
            linear-gradient(180deg, #040506 0%, #090b0f 44%, #101317 100%);
          overflow-x: clip;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        img {
          display: block;
          max-width: 100%;
        }

        button,
        a {
          -webkit-tap-highlight-color: transparent;
        }

        .page {
          position: relative;
          z-index: 1;
        }

        .noise {
          position: fixed;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image:
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.025) 0,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px,
              transparent 56px
            ),
            repeating-linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.025) 0,
              rgba(255, 255, 255, 0.025) 1px,
              transparent 1px,
              transparent 56px
            );
          mask-image: radial-gradient(circle at center, black 44%, transparent 100%);
        }

        .brand-mark {
          position: fixed;
          top: 2vw;
          left: 2vw;
          z-index: 30;
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
          align-items: center;
          mix-blend-mode: difference;
        }

        .brand-mark img {
          width: clamp(2.6rem, 3vw, 3.6rem);
          height: clamp(2.6rem, 3vw, 3.6rem);
          border-radius: 0.8rem;
        }

        .brand-mark span {
          font-family: "Syne", sans-serif;
          font-size: clamp(1rem, 1vw, 1.15rem);
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .menu-toggle {
          position: fixed;
          top: 2vw;
          right: 2vw;
          z-index: 40;
          min-width: clamp(5rem, 10vw, 7rem);
          min-height: clamp(5rem, 10vw, 7rem);
          padding: 0;
          border: 0;
          clip-path: polygon(0 0, 84% 0, 100% 18%, 100% 100%, 18% 100%, 0 82%);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.06)),
            linear-gradient(135deg, rgba(111, 159, 255, 0.16), rgba(122, 208, 174, 0.1));
          color: var(--ink);
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.75rem, 0.9vw, 0.95rem);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          cursor: pointer;
          transition: transform 220ms ease, filter 220ms ease;
          backdrop-filter: blur(18px);
        }

        .menu-toggle:hover,
        .menu-toggle:focus-visible {
          transform: translateY(-4px) rotate(-2deg);
          filter: brightness(1.08);
        }

        .menu-panel {
          position: fixed;
          inset: 0;
          z-index: 35;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          padding: 10vw 6vw 8vw 6vw;
          background:
            linear-gradient(180deg, rgba(3, 5, 8, 0.94), rgba(3, 5, 8, 0.98)),
            radial-gradient(circle at 78% 20%, rgba(111, 159, 255, 0.12), transparent 18%);
          backdrop-filter: blur(18px);
        }

        .menu-panel a {
          grid-column: 3 / 11;
          font-family: "Syne", sans-serif;
          font-size: clamp(3rem, 8vw, 7.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(244, 241, 234, 0.12);
        }

        .hero-grid,
        .offer-grid,
        .process-grid,
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          position: relative;
          width: 100vw;
        }

        .hero-grid {
          min-height: 100svh;
          padding: 10vw 6vw 12vw 4vw;
          align-items: start;
        }

        .hero-mesh {
          grid-column: 5 / 13;
          grid-row: 1 / 3;
          min-height: 58vw;
          background:
            radial-gradient(circle at 28% 26%, rgba(111, 159, 255, 0.3), transparent 22%),
            radial-gradient(circle at 74% 18%, rgba(122, 208, 174, 0.18), transparent 18%),
            radial-gradient(circle at 72% 76%, rgba(243, 210, 111, 0.1), transparent 15%),
            repeating-linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.03) 0,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 1px,
              transparent 38px
            );
          opacity: 0.88;
        }

        .hero-copy {
          grid-column: 1 / 8;
          grid-row: 1 / 3;
          align-self: end;
          padding: 10vw 0 0 0;
          position: relative;
          z-index: 2;
        }

        .hero-rail {
          position: absolute;
          top: 14vw;
          right: 2.2vw;
          writing-mode: vertical-rl;
          transform: rotate(180deg);
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.72rem, 0.8vw, 0.92rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(244, 241, 234, 0.5);
        }

        .eyebrow {
          margin: 0 0 1rem;
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.72rem, 0.8vw, 0.92rem);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(244, 241, 234, 0.58);
        }

        .hero-title {
          margin: 0;
          max-width: 7ch;
          font-family: "Syne", sans-serif;
          font-size: clamp(4.3rem, 11vw, 10rem);
          font-weight: 800;
          line-height: 0.84;
          letter-spacing: -0.08em;
          mix-blend-mode: difference;
        }

        .hero-copy p,
        .offer-copy p,
        .offer-item p,
        .process-copy p,
        .process-step p,
        .contact-copy p,
        .contact-panel p {
          font-size: var(--body-copy);
          line-height: 1.8;
          color: var(--muted);
        }

        .hero-lede {
          max-width: 34ch;
          margin: 2rem 0 0;
        }

        .hero-cta-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2.2rem;
        }

        .hero-cta,
        .contact-link {
          display: grid;
          align-items: end;
          min-height: 7rem;
          padding: 1.1rem 1.2rem;
          clip-path: polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)),
            linear-gradient(135deg, rgba(111, 159, 255, 0.1), rgba(122, 208, 174, 0.07));
          outline: 1px solid rgba(244, 241, 234, 0.12);
          color: var(--ink);
          transition: transform 220ms ease, filter 220ms ease;
        }

        .hero-cta:hover,
        .hero-cta:focus-visible,
        .contact-link:hover,
        .contact-link:focus-visible {
          transform: translateY(-4px) rotate(-1.2deg);
          filter: brightness(1.08);
        }

        .hero-cta-primary {
          grid-column: 1 / 6;
        }

        .hero-cta-secondary {
          grid-column: 6 / 10;
        }

        .hero-cta-tertiary {
          grid-column: 10 / 13;
        }

        .hero-cta span,
        .contact-link span {
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.72rem, 0.8vw, 0.9rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .hero-cta strong,
        .contact-link strong {
          font-size: clamp(1rem, 1vw, 1.12rem);
          line-height: 1.4;
        }

        .hero-proof {
          grid-column: 8 / 13;
          grid-row: 1 / 3;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          align-self: center;
          padding-top: 10vw;
        }

        .proof-main,
        .proof-mini,
        .offer-item,
        .process-step,
        .contact-panel {
          clip-path: polygon(0 0, 92% 0, 100% 16%, 100% 100%, 8% 100%, 0 84%);
          outline: 1px solid rgba(244, 241, 234, 0.12);
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
            rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(18px);
        }

        .proof-main {
          grid-column: 1 / 4;
          grid-row: 1 / 3;
          padding: 1.4rem 1.4rem 1.8rem;
          min-height: 28rem;
        }

        .proof-main h2,
        .offer-copy h2,
        .process-copy h2,
        .contact-copy h2 {
          margin: 0;
          font-family: "Syne", sans-serif;
          font-size: clamp(2.1rem, 4vw, 4.4rem);
          line-height: 0.92;
          letter-spacing: -0.07em;
        }

        .proof-main h2 {
          max-width: 8ch;
          margin-top: 0.5rem;
        }

        .proof-stack {
          grid-column: 4 / 6;
          display: grid;
          gap: 1rem;
        }

        .proof-mini {
          padding: 1.1rem;
          min-height: 10rem;
        }

        .proof-mini strong {
          display: block;
          margin-top: 0.7rem;
          font-family: "Syne", sans-serif;
          font-size: clamp(1.15rem, 1.6vw, 1.6rem);
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .proof-mini ul {
          margin: 0.8rem 0 0;
          padding-left: 1rem;
        }

        .proof-mini li {
          margin-top: 0.45rem;
        }

        .label {
          margin: 0;
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.72rem, 0.8vw, 0.9rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(244, 241, 234, 0.58);
        }

        .hero-facts {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1rem;
          margin-top: 2rem;
        }

        .hero-facts article {
          padding-top: 1rem;
          border-top: 1px solid rgba(244, 241, 234, 0.12);
        }

        .hero-facts strong {
          display: block;
          margin-bottom: 0.35rem;
          font-family: "Syne", sans-serif;
          font-size: clamp(1.9rem, 3vw, 3rem);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .offer-grid {
          padding: 4vw 6vw 12vw 4vw;
          align-items: start;
        }

        .offer-copy {
          grid-column: 1 / 5;
          padding-right: 2vw;
        }

        .offer-copy h2 {
          max-width: 8ch;
        }

        .offer-list {
          grid-column: 5 / 13;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: 1rem;
        }

        .offer-list:has(.offer-item:hover) .offer-item:not(:hover) {
          opacity: 0.34;
          transform: translateY(1rem);
        }

        .offer-item {
          padding: 1.3rem;
          transition: opacity 220ms ease, transform 220ms ease, filter 220ms ease;
        }

        .offer-item:nth-child(1) {
          grid-column: 1 / 5;
          min-height: 18rem;
        }

        .offer-item:nth-child(2) {
          grid-column: 5 / 9;
          margin-top: 5rem;
          min-height: 15rem;
        }

        .offer-item:nth-child(3) {
          grid-column: 2 / 6;
          min-height: 16rem;
          margin-top: -1rem;
        }

        .offer-item:nth-child(4) {
          grid-column: 6 / 9;
          min-height: 15rem;
          margin-top: 3rem;
        }

        .offer-item h3,
        .process-step h3 {
          margin: 0.55rem 0 0.8rem;
          font-family: "Syne", sans-serif;
          font-size: clamp(1.45rem, 2vw, 2rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
        }

        .process-grid {
          padding: 0 6vw 12vw 4vw;
          align-items: start;
        }

        .process-copy {
          grid-column: 1 / 5;
        }

        .process-rail {
          grid-column: 5 / 13;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          gap: 1rem;
        }

        .process-step {
          padding: 1.3rem;
        }

        .process-step:nth-child(1) {
          grid-column: 1 / 5;
        }

        .process-step:nth-child(2) {
          grid-column: 4 / 8;
          margin-top: 3rem;
        }

        .process-step:nth-child(3) {
          grid-column: 2 / 6;
          margin-top: 2rem;
        }

        .process-step:nth-child(4) {
          grid-column: 5 / 9;
          margin-top: 4rem;
        }

        .process-step span {
          display: inline-block;
          font-family: "IBM Plex Mono", monospace;
          font-size: clamp(0.8rem, 0.9vw, 1rem);
          color: var(--green);
        }

        .contact-grid {
          padding: 0 6vw 18vw 4vw;
          align-items: start;
        }

        .contact-copy {
          grid-column: 1 / 6;
        }

        .contact-copy h2 {
          max-width: 8ch;
        }

        .contact-rail {
          grid-column: 7 / 13;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 1rem;
        }

        .contact-panel {
          padding: 1.3rem;
        }

        .contact-panel-main {
          grid-column: 1 / 5;
          min-height: 18rem;
        }

        .contact-panel-side {
          grid-column: 5 / 7;
          min-height: 18rem;
        }

        .contact-links {
          grid-column: 2 / 7;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 1rem;
          margin-top: -3rem;
        }

        .contact-links:has(.contact-link:hover) .contact-link:not(:hover) {
          opacity: 0.35;
          transform: translateX(1rem);
        }

        .contact-link {
          transition: opacity 220ms ease, transform 220ms ease, filter 220ms ease;
        }

        .contact-link:nth-child(1) {
          grid-column: 1 / 3;
        }

        .contact-link:nth-child(2) {
          grid-column: 3 / 5;
        }

        .contact-link:nth-child(3) {
          grid-column: 2 / 6;
        }

        .site-footer {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          padding: 0 6vw 4vw 4vw;
          align-items: end;
        }

        .site-footer div {
          grid-column: 1 / 5;
          display: grid;
          grid-template-columns: auto auto;
          gap: 1rem;
          align-items: center;
        }

        .site-footer img {
          width: clamp(2rem, 2.4vw, 3rem);
          height: clamp(2rem, 2.4vw, 3rem);
          border-radius: 0.7rem;
        }

        .site-footer p {
          margin: 0;
          font-size: clamp(0.78rem, 0.86vw, 0.95rem);
          color: rgba(244, 241, 234, 0.56);
        }

        .site-footer > p {
          grid-column: 9 / 13;
          justify-self: end;
          text-align: right;
        }

        @media (max-width: 1080px) {
          .hero-grid,
          .offer-grid,
          .process-grid,
          .contact-grid,
          .site-footer {
            padding-right: 5vw;
            padding-left: 5vw;
          }

          .hero-copy,
          .offer-copy,
          .process-copy,
          .contact-copy,
          .hero-proof,
          .offer-list,
          .process-rail,
          .contact-rail {
            grid-column: 1 / 13;
          }

          .hero-copy {
            padding-top: 16vw;
          }

          .hero-mesh {
            grid-column: 1 / 13;
            min-height: 48rem;
          }

          .hero-proof {
            margin-top: 2rem;
            padding-top: 0;
          }

          .offer-grid,
          .process-grid,
          .contact-grid {
            padding-top: 4rem;
          }
        }

        @media (max-width: 780px) {
          .brand-mark {
            top: 1rem;
            left: 1rem;
          }

          .menu-toggle {
            top: 1rem;
            right: 1rem;
            min-width: 4.6rem;
            min-height: 4.6rem;
          }

          .menu-panel {
            padding: 7rem 1.2rem 3rem;
          }

          .menu-panel a {
            grid-column: 1 / 13;
          }

          .hero-grid,
          .offer-grid,
          .process-grid,
          .contact-grid {
            padding: 6.2rem 1.2rem 5rem;
          }

          .hero-title {
            font-size: clamp(3.3rem, 16vw, 6rem);
          }

          .hero-rail {
            display: none;
          }

          .hero-cta-grid,
          .hero-proof,
          .offer-list,
          .process-rail,
          .contact-rail,
          .contact-links {
            grid-template-columns: repeat(12, minmax(0, 1fr));
          }

          .hero-cta-primary,
          .hero-cta-secondary,
          .hero-cta-tertiary,
          .proof-main,
          .proof-stack,
          .offer-item:nth-child(1),
          .offer-item:nth-child(2),
          .offer-item:nth-child(3),
          .offer-item:nth-child(4),
          .process-step:nth-child(1),
          .process-step:nth-child(2),
          .process-step:nth-child(3),
          .process-step:nth-child(4),
          .contact-panel-main,
          .contact-panel-side,
          .contact-link:nth-child(1),
          .contact-link:nth-child(2),
          .contact-link:nth-child(3) {
            grid-column: 1 / 13;
            margin-top: 0;
          }

          .proof-main,
          .proof-mini,
          .offer-item,
          .process-step,
          .contact-panel,
          .hero-cta,
          .contact-link {
            clip-path: polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%);
          }

          .hero-facts {
            grid-template-columns: 1fr;
          }

          .site-footer {
            padding: 0 1.2rem 2rem;
          }

          .site-footer div,
          .site-footer > p {
            grid-column: 1 / 13;
            justify-self: start;
            text-align: left;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          * {
            transition: none !important;
          }
        }
      `}</style>

      <div className="page">
        <div className="noise" aria-hidden="true" />

        <a className="brand-mark" href="#top" aria-label="Riga Web Studio home">
          <img src={logo} alt="Riga Web Studio logo" />
          <span>Riga Web Studio</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="menu-panel"
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        {menuOpen ? (
          <div className="menu-panel" id="menu-panel">
            {menuLinks.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </div>
        ) : null}

        <main id="top">
          <section className="hero-grid">
            <div className="hero-mesh" aria-hidden="true" />

            <div className="hero-copy">
              <p className="eyebrow">Static websites. Designed, built, deployed.</p>
              <p className="hero-rail">Warm lead page for Riga Web Studio</p>
              <h1 className="hero-title">Make them stop scrolling.</h1>
              <p className="hero-lede">
                I build static websites for businesses that need a cleaner first impression.
                I design the page, build it, deploy it, and that is the service.
              </p>

              <div className="hero-cta-grid">
                <a className="hero-cta hero-cta-primary" href="mailto:rigawebstudio@gmail.com">
                  <span>Email</span>
                  <strong>Start with a message</strong>
                </a>
                <a className="hero-cta hero-cta-secondary" href="tel:+37128780935">
                  <span>Phone</span>
                  <strong>+371 28 780 935</strong>
                </a>
                <a
                  className="hero-cta hero-cta-tertiary"
                  href="https://www.facebook.com/people/Riga-Web-Studio/61586430456555/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Facebook</span>
                  <strong>Message the page</strong>
                </a>
              </div>

              <div className="hero-facts">
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

            <div className="hero-proof">
              <article className="proof-main">
                <p className="label">What you get</p>
                <h2>A polished static website that is ready to go live.</h2>
                <p>
                  This is for businesses that need a modern brochure-style site, not a giant
                  system. The point is to look credible, explain the business clearly, and
                  turn a warm lead into a real enquiry.
                </p>
              </article>

              <div className="proof-stack">
                <article className="proof-mini">
                  <p className="label">Included</p>
                  <strong>Design</strong>
                  <strong>Build</strong>
                  <strong>Deploy</strong>
                </article>

                <article className="proof-mini">
                  <p className="label">Best fit</p>
                  <ul>
                    <li>Small businesses</li>
                    <li>Static sites</li>
                    <li>Fast launches</li>
                    <li>No bloated stack</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section className="offer-grid" id="offer">
            <div className="offer-copy">
              <p className="eyebrow">The offer</p>
              <h2>Simple service. Done properly.</h2>
              <p>
                This page is here to do one job: explain what I make, how the work goes,
                and why reaching out is worth it.
              </p>
            </div>

            <div className="offer-list">
              {offerItems.map(([title, body]) => (
                <article className="offer-item" key={title}>
                  <p className="label">Offer</p>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="process-grid" id="process">
            <div className="process-copy">
              <p className="eyebrow">How it goes</p>
              <h2>Short path. Clear outcome.</h2>
              <p>
                No maze. No handoff gap. No vague finish. The site gets designed, built,
                deployed, and handed over.
              </p>
            </div>

            <div className="process-rail">
              {processItems.map(([step, body]) => (
                <article className="process-step" key={step}>
                  <span>{step}</span>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="contact-grid" id="contact">
            <div className="contact-copy">
              <p className="eyebrow">Contact</p>
              <h2>Start with one message.</h2>
              <p>
                If you need a static website that looks clean, feels current, and gets the
                business taken more seriously, reach out on whichever channel is easiest.
              </p>
            </div>

            <div className="contact-rail">
              <article className="contact-panel contact-panel-main">
                <p className="label">Main pitch</p>
                <h2>Ready-made professional websites for businesses.</h2>
                <p>
                  That line from the Facebook page is still true. This page just explains it
                  more clearly.
                </p>
              </article>

              <article className="contact-panel contact-panel-side">
                <p className="label">Channels</p>
                <p>Email for details.</p>
                <p>Phone for speed.</p>
                <p>Facebook for quick starts.</p>
              </article>

              <div className="contact-links">
                <a className="contact-link" href="mailto:rigawebstudio@gmail.com">
                  <span>Email</span>
                  <strong>rigawebstudio@gmail.com</strong>
                </a>
                <a className="contact-link" href="tel:+37128780935">
                  <span>Phone</span>
                  <strong>+371 28 780 935</strong>
                </a>
                <a
                  className="contact-link"
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

        <footer className="site-footer">
          <div>
            <img src={logo} alt="Riga Web Studio logo" />
            <p>Riga Web Studio</p>
          </div>
          <p>Static websites with a harder edge.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
