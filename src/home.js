import { setActivePage } from "./website";
import { loadMenu } from "./menu";
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const button = document.createElement("button");
    button.textContent = "Menu";
    button.classList.add("menu-btn");
    button.addEventListener('click', (e) => {
        loadMenu();
        setActivePage(document.querySelector("#nav-menu"));
    });

    home.appendChild(createParagraph("Best restaurant in your country"));
    home.appendChild(createParagraph("Made with passion since 1999"));
    home.appendChild(createParagraph("View our menu:"));
    home.appendChild(button);

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export { loadHome, createParagraph };