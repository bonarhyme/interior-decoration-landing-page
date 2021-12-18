const links = document.querySelectorAll(".nav-li");
const navUl = document.querySelector(".nav-ul");
const navButton = document.querySelector(".nav-menu-button");

links.forEach((panel) => {
  panel.addEventListener("click", () => {
    links[0].firstChild.classList.remove("active");
    navUl.classList.add("none");
  });
});

let toggle = true;

navButton.addEventListener("click", () => {
  navUl.classList.toggle("none");

  if (toggle) {
    navButton.innerHTML = "&timesbar;";
    navButton.style.backgroundColor = "orange";
    toggle = false;
  } else {
    navButton.innerHTML = "&Equal;";
    navButton.style.backgroundColor = "";
    toggle = true;
  }
});
