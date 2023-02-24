const hamburger = document.querySelector(".hamburger"); /*pierwszy element w dokumencie, który pasuje do określonego zestawu selektorów CSS*/
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})