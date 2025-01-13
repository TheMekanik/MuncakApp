// Toggle Sidebar
const navbarList = document.querySelector(".navbar-list");

// ketika extra-bars / hamburger menu di klik
document.querySelector("#extra-bars").onclick = () => {
  navbarList.classList.toggle("active");
};

// Klik diluar sidebar untuk menutup
const extraBars = document.querySelector("#extra-bars");
document.addEventListener("click", function (e) {
  if (!extraBars.contains(e.target) && !navbarList.contains(e.target))
    navbarList.classList.remove("active");
});

// Menghindari auto scroll saat icon extra-bar di klik
document.querySelector("#extra-bars").onclick = (e) => {
  navbarList.classList.toggle("active");
  e.preventDefault();
};
