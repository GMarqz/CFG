import CreateElement from "../../../classes/CreateElement.js";
import CreateImage from "../../../classes/CreateImage.js";

function makePlayerOne(parentElement){
    const divPlayersPlayerOne = new CreateElement("DIV", "players__player-one", '');
    parentElement.appendChild(divPlayersPlayerOne.element);

    const divPlayersPlayerOneText = new CreateElement("P", "ingame__main__player-one", "Player 1");
    divPlayersPlayerOne.element.appendChild(divPlayersPlayerOneText.element);

    const divPlayersPlayerOnePoints = new CreateElement("P", "ingame__main__points__player-one", 0);
    divPlayersPlayerOne.element.appendChild(divPlayersPlayerOnePoints.element);

    const imgPlayerOne = new CreateImage("IMG", "img__player-one", "/CFG-main/assets/images/player-one.svg", "");
    divPlayersPlayerOne.element.appendChild(imgPlayerOne.element);
}

export default makePlayerOne;