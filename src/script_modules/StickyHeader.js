import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class StickyHeader {
    constructor() {
        this.headerSection = document.querySelector(".header-section");
        this.pageSections = document.querySelectorAll(".page-section");
        this.browserHeight = window.innerHeight;
        this.previousScroll = window.scrollY;
        this.events();
    }

    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll()), 200);

        // babysit this.browserHeight whenever the user resizes the window
        window.addEventListener("resize", debounce(() => {
            this.browserHeight = window.innerHeight;
        }, 333));
    }

    runOnScroll() {
        this.determineScrollDirection();

        if (window.scrollY > 60) {
            this.headerSection.classList.add("header-section--dark");
        } else {
            this.headerSection.classList.remove("header-section--dark");
        }

        this.pageSections.forEach(el => this.calcSection(el));
    }

    determineScrollDirection() {
        // console.log("previous: ", this.previousScroll);
        // console.log("window.scrollY: ", window.scrollY);
        if (window.scrollY > this.previousScroll) {
            this.scrollDirection = "down";
        } else {
            this.scrollDirection = "up";
        }

        this.previousScroll = window.scrollY;
        // console.log("---------------------");
    }

    calcSection(el) {
        if (((window.scrollY + this.browserHeight) > el.offsetTop) && (window.scrollY < (el.offsetTop + el.offsetHeight))) {
            let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100;

            if ((scrollPercent < 18 && scrollPercent > 0.1 && this.scrollDirection === "down") || scrollPercent < 33 && this.scrollDirection === "up") {

                console.log(el.id);
                console.log(scrollPercent);
                console.log(this.scrollDirection);
                let matchingLink = el.getAttribute("data-matching-link");
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"));
                document.querySelector(matchingLink).classList.add("is-current-link");
            }

        }

    }

}

export default StickyHeader;