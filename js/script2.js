const menuToggle = document.querySelector(".menu-toggle-button input");
const nav = document.querySelector("nav .navigation-menu");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});
const sideBar1Toggle = document.querySelector(".sidebar1 button");
const subMenu1 = document.querySelector(".sidebar1 ul");
sideBar1Toggle.addEventListener("click", function () {
  subMenu1.classList.toggle("show");
});
const sideBar2Toggle = document.querySelector(".sidebar2 button");
const subMenu2 = document.querySelector(".sidebar2 ul");
sideBar2Toggle.addEventListener("click", function () {
  subMenu2.classList.toggle("show");
});
