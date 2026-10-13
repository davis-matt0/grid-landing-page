const mainContent = document.getElementById("main-content");
const popOutMenu = document.getElementById("my-popout-menu");
const menuBtn = document.getElementById("menu-btn");
const imgs = document.querySelectorAll(".info-section-img");

menuBtn.addEventListener("click", () => {
  mainContent.classList.toggle("main-content");
});
