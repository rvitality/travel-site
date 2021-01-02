import "../app/style/style.css";
import MobileMenu from "./script_modules/MobileMenu";
import RevealOnScroll from "./script_modules/RevealOnScroll";
import StickyHeader from "./script_modules/StickyHeader";

let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);

let stickyHeader = new StickyHeader();

if (module.hot) {
    module.hot.accept();
}