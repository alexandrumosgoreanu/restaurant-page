import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadAbout } from "./about";

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} amosgoreanu`;

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/alexandrumosgoreanu";

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fab");
    githubIcon.classList.add("fa-github");

    githubLink.appendChild(githubIcon);
    footer.appendChild(copyright);
    footer.appendChild(githubLink);

    return footer;
};

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    // Title
    const name = document.createElement("h1");
    name.classList.add("restaurant-name");
    name.textContent = "Andu's";

    // Navbar
    const navbar = document.createElement("nav");
    navbar.classList.add("navbar");
    const homeBtn = document.createElement("button");
    homeBtn.classList.add("nav-btn");
    homeBtn.classList.add("active");
    homeBtn.textContent = "Home";
    homeBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))
            return;
        setActivePage(homeBtn);
        loadHome();
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("nav-btn");
    menuBtn.textContent = "Menu";
    menuBtn.id = "nav-menu";
    menuBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))
            return;
        setActivePage(menuBtn);
        loadMenu();  
    });


    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("nav-btn");
    aboutBtn.textContent = "About";
    aboutBtn.addEventListener("click", (e) => {
        if(e.target.classList.contains("active"))
            return;
        setActivePage(aboutBtn);
        loadAbout();  
    });

    navbar.appendChild(homeBtn);
    navbar.appendChild(menuBtn);
    navbar.appendChild(aboutBtn);

    header.appendChild(name);
    header.appendChild(navbar);
    return header;
}

function setActivePage(button) {
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach((button) => {
        if(button !== this)
            button.classList.remove("active");
    });

    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }

function createWebsite() {
    const content = document.querySelector("#content");

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    loadHome();
}

export { createWebsite, setActivePage };
