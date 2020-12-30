import throttle from "lodash/throttle";

class RevealOnScroll {
    constructor(elements, threshold) {
        this.thresholdPercent = threshold;
        this.itemsToReveal = elements;
        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        console.log(this);
        this.events();
    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle);
    }

    calcCaller() {
        console.log("calcCaller is running....");
        this.itemsToReveal.forEach(el => {
            if (!el.isRevealed) {
                this.calculateIfScrolledTo(el);
            }
        });
    }

    calculateIfScrolledTo(el) {
        console.log("calculateIfScrolledTo is running ..");
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100;
        if (scrollPercent < this.thresholdPercent) {
            el.classList.add("reveal-item--is-visible")
            el.isRevealed = true;

            // if its the current element
            if (el.isLastItem) {
                console.log(el);
                window.removeEventListener("scroll", this.scrollThrottle);
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