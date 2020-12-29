class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".header-section__menu-icon");
        this.menuContent = document.querySelector(".header-section__nav-container");
        this.headerSection = document.querySelector(".header-section");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }

    toggleMenu() {
        this.menuContent.classList.toggle("header-section__nav-container--is-visible");
        this.headerSection.classList.toggle("header-section__nav-container--is-expanded");
        this.menuIcon.classList.toggle("header-section__menu-icon--close-x");
    }

}

export default MobileMenu;