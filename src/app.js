import "../app/style/style.css";
import MobileMenu from "./script_modules/MobileMenu";
import RevealOnScroll from "./script_modules/RevealOnScroll";

let mobileMenu = new MobileMenu();

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonial"), 80);

if (module.hot) {
    module.hot.accept();
}