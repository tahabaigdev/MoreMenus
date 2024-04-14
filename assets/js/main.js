// Fixed Navbar

const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const scrollTop = window.screenY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.style.top = "-200px";
    header.classList.remove("active");
  } else {
    header.style.top = "0px";
    header.classList.add("active");
  }
  lastScrollTop = scrollTop;
  header.classList.toggle("active", window.pageYOffset > 50);
});

// Hamburger Menu

const hamburgerBtn = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const headerOverlay = document.querySelector(".header-overlay");

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("active");
  navList.classList.toggle("active");
  headerOverlay.classList.toggle("active");
  document.querySelector("body").classList.toggle("active");
});

headerOverlay.addEventListener("click", () => {
  hamburgerBtn.classList.remove("active");
  navList.classList.remove("active");
  headerOverlay.classList.remove("active");
  document.querySelector("body").classList.remove("active");
});
