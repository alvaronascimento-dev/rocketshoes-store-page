//GETTING MENU BUTTON FROM HTML DOCUMENT
const btnMobile = document.querySelector(".btn-mobile");

//FUNCTION TO ACTIVATE THE MENU
function toggleMenu() {
    const menuMobile = document.querySelector(".menu-section");
    menuMobile.classList.toggle("active");

    document.body.style.overflow = menuMobile.classList.contains("active") ? "hidden" : "initial";
}

//ADDING TOUCH EVENT IN THE MENU
btnMobile.addEventListener("touchstart", toggleMenu);