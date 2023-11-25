function createAbout() {
    const about = document.createElement("div");
    about.classList.add("about");
    
    const phoneNumber = document.createElement('p');
    phoneNumber.textContent = '📞 123 456 789';
  
    const address = document.createElement('p');
    address.textContent = '🏠 Hollywood Boulevard 42, Los Angeles, USA';

    about.appendChild(phoneNumber);
    about.appendChild(address);
    
    return about;
}

function loadAbout() {
    const main = document.querySelector("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export { loadAbout };