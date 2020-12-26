class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".header-section__menu-icon");
        this.menuContent = document.querySelector(".header-section__nav-container");
        this.events();
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleMenu());
    }

    toggleMenu() {
        this.menuContent.classList.toggle("header-section__nav-container--is-visible")
    }

}

export default MobileMenu;