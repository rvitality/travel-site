import "../app/style/style.css";
import MobileMenu from "./script_modules/MobileMenu";

let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept();
}