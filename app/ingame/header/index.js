import CreateElement from "../../classes/CreateElement.js";
import CreateImage from "../../classes/CreateImage.js";
import makePauseMenu from "./pauseMenu.js";


function makeInGameHeader(parentElement){
    const header = new CreateElement("HEADER", "ingame__header", '');
    parentElement.appendChild(header.element);

    const inGameHeaderMenuBtn = new CreateElement("BUTTON", "ingame__header__menu-btn", "MENU");
    header.element.appendChild(inGameHeaderMenuBtn.element);

    const inGameHeaderLogo = new CreateImage("IMG", "ingame__header__logo", "/CFG-main/assets/images/logo.svg", "Game's Logo");
    header.element.appendChild(inGameHeaderLogo.element);

    const inGameHeaderRestartBtn = new CreateElement("BUTTON", "", "RESTART");
    header.element.appendChild(inGameHeaderRestartBtn.element);

    const ingameheader = document.querySelector('.ingame__header__menu-btn');

    if(ingameheader == true){
        ingameheader.addEventListener("click", function (event) {
            if (event.target.matches('.ingame__header__menu-btn')) {
                makePauseMenu(parentElement);
            }
        });
    }
}



export default makeInGameHeader;
