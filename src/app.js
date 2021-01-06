import "../app/style/style.css";
import MobileMenu from "./script_modules/MobileMenu";
import RevealOnScroll from "./script_modules/RevealOnScroll";
import StickyHeader from "./script_modules/StickyHeader";


new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);
new StickyHeader();

let modal;

// modal functionality, import the modal only when needed, not at the beginning
document.querySelectorAll(".open-modal-btn").forEach(el =>
    el.addEventListener("click", e => {
        e.preventDefault();

        // if the modal hasn't been imported yet
        if (modal === undefined) {

            // receives a promise
            import( /* webpackChunkName: modal */ "./script_modules/Modal")
                .then(data => {
                    // that default has something to do with webpack
                    modal = new data.default();
                    setTimeout(() => {
                        modal.openTheModal();
                    }, 20);
                })
                .catch(() => console.log("There was a problem with the modal"))
        } else {
            modal.openTheModal();
        }

    })
);



if (module.hot) {
    module.hot.accept();
}