const menuButtons = document.querySelectorAll("button.change-page");
const menu = document.querySelector(".call-to-action");

menuButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});