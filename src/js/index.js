// hamBtn toggle
const hamBtn = document.querySelector(".hamBtn");
const hamBtnSpan = document.querySelector(".hamBtn span");
const navigasi = document.querySelector(".navigasi");
hamBtn.addEventListener("click", () => {
  navigasi.classList.toggle("show");
  hamBtnSpan.classList.toggle("recolor");
});

// scroll
const nav = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", () => {
  if (window.scrollY > 3) {
    nav.classList.add("scroll");
  } else {
    nav.classList.remove("scroll");
  }
});
