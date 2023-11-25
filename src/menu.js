import { createParagraph } from "./home";

function createMenu () {
    const menu = document.createElement("div");
    menu.classList.add("menu");
    menu.appendChild(createParagraph("This is our menu:"));

    return menu;
}

function loadMenu() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export { loadMenu };