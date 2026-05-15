const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#primary-menu");
const navLinks = document.querySelectorAll('a[href^="#"]');
const currentYear = document.querySelector("#current-year");

function closeMenu() {
  if (!navToggle || !navMenu) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";

    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navMenu.classList.toggle("is-open");
    document.body.classList.toggle("nav-open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const targetSection = document.querySelector(targetId);

    if (!targetSection) {
      return;
    }

    event.preventDefault();
    closeMenu();
    targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

// Language Switch Logic
const langToggle = document.querySelector(".lang-toggle");
const langOptions = document.querySelectorAll(".lang-option");

function setLanguage(lang) {
  if (lang === "en") {
    document.body.classList.add("lang-en");
  } else {
    document.body.classList.remove("lang-en");
  }

  langOptions.forEach((opt) => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });

  localStorage.setItem("preferred-lang", lang);
}

if (langToggle) {
  langToggle.addEventListener("click", (e) => {
    const option = e.target.closest(".lang-option");
    if (option) {
      setLanguage(option.dataset.lang);
    }
  });

  // Initialize language
  const savedLang = localStorage.getItem("preferred-lang") || "zh-CN";
  setLanguage(savedLang);
}
