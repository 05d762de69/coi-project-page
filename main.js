const toggle = document.querySelector(".nav-toggle");
const list = document.querySelector("#nav-list");

if (toggle && list) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    list.setAttribute("data-open", String(!isOpen));
  });

  list.addEventListener("click", (e) => {
    if (e.target && e.target.tagName.toLowerCase() === "a") {
      toggle.setAttribute("aria-expanded", "false");
      list.setAttribute("data-open", "false");
    }
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();