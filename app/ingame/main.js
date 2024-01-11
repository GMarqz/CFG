import CreateElement from "../classes/CreateElement.js";
import makeInGameHeader from "./header/index.js";
import makeMainSection from "./mainSection/index.js";
import makeCountdown from "./mainSection/countdown/index.js";
import makeRetangule from "./mainSection/footer/index.js";

function makeInGameMain() {
    const main = new CreateElement("MAIN", "ingame", '');

    makeInGameHeader(main.element);
    makeMainSection(main.element);
    makeCountdown(main.element);
    makeRetangule(main.element);

    document.body.innerHTML = '';
    document.body.appendChild(main.element);
}

const startGameButton = document.querySelector(".container__button__vsplayer");
startGameButton.addEventListener('click', makeInGameMain);

export default makeInGameMain;
