import Axios from "axios";

class ClientArea {

    constructor() {
        this.injectHTML();
        this.form = document.querySelector(".client-area__form");
        this.field = document.querySelector(".client-area__input");
        this.contentArea = document.querySelector(".client-area__content-area");
        this.events();
    }

    events() {
        this.form.addEventListener("submit", e => {
            e.preventDefault();
            // this.sendRequest();
        });
    }

    sendRequest() {
        console.log(123);
        Axios.post("https://brave-lamarr-83fc61.netlify.app/.netlify/functions/secret-area", {
                password: this.field.value
            })
            .then(res => {
                console.log("success");
                this.form.remove();
                this.contentArea.innerHTML = res.data;
            })
            .catch(() => {
                console.log("catched");
                this.contentArea.innerHTML = `<p class="client-area__error">The secret phrase is not correct.</p>`;
                this.field.value = "";
                this.field.focus();
            })
    }

    injectHTML() {
        let html = document.createElement("div");
        html.innerHTML = `<div class="client-area">
        <div class="wrapper wrapper--medium">
        <h2 class="section-title section-title--blue">Secret Client Area</h2>
        <form class="client-area__form" action="">
            <input class="client-area__input" type="text" placeholder="Enter the secret phrase">
            <button class="btn btn--orange">Submit</button>
        </form>
        <div class="client-area__content-area"></div>
        </div>
    </div>`;

        document.body.insertAdjacentElement("beforeend", html);
    }

}

export default ClientArea;