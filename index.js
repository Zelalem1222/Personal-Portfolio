   
const nav = document.querySelector("nav");
const main = document.createElement("div");
main.className = "mob-menu";
nav.appendChild(main);

main.innerHTML = `
<img class="menu-list" src="images/Enabled.png" alt="menu">
`;

const menu = document.querySelector(".menu-list");
menu.addEventListener("click" , () => {
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.innerHTML = `
    <i class="fa-solid fa-xmark close"></i>
    <ul class="menu-tags">
    <li><a class="menu-link1 menu-portfolio" href="">Portfolio</a></li>
    <li><a class="menu-link2 menu-about" href="#about">About</a></li>
    <li><a class="menu-link3 menu-contact" href="#footer">Contact</a></li>
      </ul>

    `;
    main.appendChild(popup);


    const close = document.querySelector(".close");
    close.addEventListener("click" , () => {
        main.removeChild(popup);
    })

    document.querySelector(".menu-link1").addEventListener("click" , () => {
        main.removeChild(popup);
    })
    document.querySelector(".menu-link2").addEventListener("click" , () => {
        main.removeChild(popup);
    })
    document.querySelector(".menu-link3").addEventListener("click" , () => {
        main.removeChild(popup);
    })
})



