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

const peopleSection = document.querySelector("#people");
const peopleGrid = document.querySelector("#people-grid");
const peopleToggle = document.querySelector("#people-toggle");

if (peopleSection && peopleGrid && peopleToggle) {
  const extraPeople = peopleGrid.querySelectorAll(".person.is-extra");

  // If there are no extra cards, hide the button
  if (extraPeople.length === 0) {
    peopleToggle.style.display = "none";
  }

  peopleToggle.addEventListener("click", () => {
    const expanded = peopleSection.classList.toggle("is-expanded");

    peopleToggle.setAttribute("aria-expanded", String(expanded));
    peopleToggle.textContent = expanded ? "Show less" : "Show more";

    // Optional: keep keyboard context sensible on collapse
    if (!expanded) peopleToggle.focus();
  });
}