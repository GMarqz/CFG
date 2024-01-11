import CreateElement from "../../classes/CreateElement.js";
import makePlayerOne from "./players/playerOne.js";
import makePlayerTwo from "./players/playerTwo.js";
import makeGameArea from "./layers/layers.js";

function makeMainSection(parentElement){
    const inGameMainSection = new CreateElement("SECTION", "ingame__main", '');
    parentElement.appendChild(inGameMainSection.element);

    const divPlayers = new CreateElement("DIV", "players", '');
    inGameMainSection.element.appendChild(divPlayers.element);

    makePlayerOne(divPlayers.element);
    makePlayerTwo(divPlayers.element);
    makeGameArea(inGameMainSection.element);
}

export default makeMainSection;
