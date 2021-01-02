import throttle from "lodash/throttle";

class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll()), 200);
    }

    runOnScroll() {
        if (window.scrollY > 60) {
            this.headerSection.classList.add("header-section--dark");
        } else {
            this.headerSection.classList.remove("header-section--dark");
        }
    }

}

export default StickyHeader;