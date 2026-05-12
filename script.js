const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = [...document.querySelectorAll(".site-nav a")];
const filterButtons = [...document.querySelectorAll(".filter-button")];
const publications = [...document.querySelectorAll(".publication-list li")];

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    publications.forEach((item) => {
      const tags = item.dataset.tags || "";
      const matches = filter === "all" || item.dataset.year === filter || tags.includes(filter);
      item.classList.toggle("is-hidden", !matches);
    });
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const activeNav = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
      });
    });
  },
  { rootMargin: "-45% 0px -48% 0px", threshold: 0 }
);

sections.forEach((section) => activeNav.observe(section));

const year = document.querySelector("#year");
if (year) year.textContent = String(new Date().getFullYear());
