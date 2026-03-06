const counters = document.querySelectorAll("[data-count]");
const tiltCards = document.querySelectorAll(".tilt-card");
const magneticItems = document.querySelectorAll(".magnetic");
const heroStage = document.getElementById("hero-stage");
const heroBanner = document.getElementById("hero-banner");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion && heroStage && heroBanner) {
  const current = { x: 0, y: 0 };
  const target = { x: 0, y: 0 };
  let rafId = 0;

  const animateHero = () => {
    current.x += (target.x - current.x) * 0.08;
    current.y += (target.y - current.y) * 0.08;

    heroBanner.style.transform =
      `perspective(1400px) rotateX(${current.y}deg) rotateY(${current.x}deg) scale(1.01)`;

    if (
      Math.abs(target.x - current.x) > 0.01 ||
      Math.abs(target.y - current.y) > 0.01
    ) {
      rafId = requestAnimationFrame(animateHero);
    } else {
      rafId = 0;
    }
  };

  const startAnimation = () => {
    if (!rafId) {
      rafId = requestAnimationFrame(animateHero);
    }
  };

  heroStage.addEventListener("pointermove", (event) => {
    const rect = heroStage.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width - 0.5;
    const offsetY = (event.clientY - rect.top) / rect.height - 0.5;

    target.x = offsetX * 5;
    target.y = offsetY * -4;
    startAnimation();
  });

  heroStage.addEventListener("pointerleave", () => {
    target.x = 0;
    target.y = 0;
    startAnimation();
  });
}

const countObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const element = entry.target;
      const target = Number(element.dataset.count);
      const suffix = element.textContent.replace(/[0-9]/g, "");
      const duration = 1400;
      const start = performance.now();

      const tick = (time) => {
        const progress = Math.min((time - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = Math.round(target * eased);
        element.textContent = `${value}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
      };

      requestAnimationFrame(tick);
      observer.unobserve(element);
    });
  },
  { threshold: 0.65 }
);

counters.forEach((counter) => countObserver.observe(counter));

tiltCards.forEach((card) => {
  if (prefersReducedMotion) {
    return;
  }

  const reset = () => {
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
  };

  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    const offsetX = (event.clientX - rect.left) / rect.width;
    const offsetY = (event.clientY - rect.top) / rect.height;
    const rotateY = (offsetX - 0.5) * 10;
    const rotateX = (0.5 - offsetY) * 10;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", reset);
  card.addEventListener("blur", reset, true);
});

magneticItems.forEach((item) => {
  if (prefersReducedMotion) {
    return;
  }

  item.addEventListener("pointermove", (event) => {
    const rect = item.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    item.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  });

  item.addEventListener("pointerleave", () => {
    item.style.transform = "";
  });
});
