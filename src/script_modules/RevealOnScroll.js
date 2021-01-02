import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

class RevealOnScroll {
    constructor(elements, threshold) {
        this.thresholdPercent = threshold;
        this.itemsToReveal = elements;
        this.windowHeight = window.innerHeight;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
        window.addEventListener("resize", debounce(() => {
            console.log("debounce ran -----------------------------");
            this.windowHeight = window.innerHeight;
        }, 333));
    }

    calcCaller() {
        // console.log("calcCaller is running....");
        this.itemsToReveal.forEach(el => {
            if (!el.isRevealed) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        // console.log(window.scrollY + this.windowHeight, el.offsetTop);
        // console.log("calculateIfScrolledTo is running ..");

        if ((window.scrollY + this.windowHeight) > el.offsetTop) {
            let scrollPercent = (el.getBoundingClientRect().y / this.windowHeight) * 100;
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible")
                el.isRevealed = true;

                // if its the current element
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollThrottle);
                }
            }
        }


    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item");
            el.isRevealed = false;
        });

        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }

}

export default RevealOnScroll;