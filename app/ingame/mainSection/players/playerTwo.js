import CreateElement from "../../../classes/CreateElement.js";
import CreateImage from "../../../classes/CreateImage.js";

function makePlayerTwo(parentElement){
    const divPlayersPlayerTwo = new CreateElement("DIV", "players__player-two", '');
    parentElement.appendChild(divPlayersPlayerTwo.element);

    const divPlayersPlayerTwoText = new CreateElement("P", "ingame__main__player-two", "Player 2");
    divPlayersPlayerTwo.element.appendChild(divPlayersPlayerTwoText.element);

    const divPlayersPlayerTwoPoints = new CreateElement("P", "ingame__main__points__player-two", 0);
    divPlayersPlayerTwo.element.appendChild(divPlayersPlayerTwoPoints.element);

    const imgPlayerTwo = new CreateImage("IMG", "img__player-two", "/CFG-main/assets/images/player-two.svg", "");
    divPlayersPlayerTwo.element.appendChild(imgPlayerTwo.element);
}

export default makePlayerTwo;
