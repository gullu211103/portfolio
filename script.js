// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

navToggle.addEventListener("click", () => {
  const isOpen = navMobile.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMobile.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMobile.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Scroll-reveal animation
const revealEls = document.querySelectorAll(".reveal");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}
