// Selectors
const header = document.querySelector(".header");
const hamBtn = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");
const showNavListBtn = document.querySelector(".nav-list");

// Event Listeners
window.addEventListener("resize", () => {
    if (document.querySelector(".header").classList.contains("open-menu")) {
        toggleClasses();
    }
});
hamBtn.addEventListener("click", e => {
    toggleClasses();
})
overlay.addEventListener("click", e => {
    toggleClasses();
})
document.addEventListener('keydown', e => {
    if (document.querySelector(".header").classList.contains("open-menu")) {
        if(e.keyCode == 27) {
            toggleClasses();
        }
    }
    
});
showNavListBtn.addEventListener("click", e => {
    showNavListBtn.classList.toggle("show-nav-list")
})
// Functions
function toggleClasses() {
    header.classList.toggle("open-menu");
    document.body.classList.toggle("lock-body");  
}