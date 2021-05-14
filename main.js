const ul = document.querySelector("ul");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".open-menu");
const tooltip = document.querySelector(".tool-tip");

openMenu.addEventListener("click", () => {
  ul.style.display = " flex";
  ul.style.top = "0";
  tooltip.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  ul.style.top = "-100%";
  tooltip.style.display = "flex";
});
