import CreateElement from "../../../classes/CreateElement.js";
import CreateImage from "../../../classes/CreateImage.js";

function makeCountdown(parentElement){
    const divCounterPlayerOne = new CreateElement("DIV", "counter__player-one", '');
    parentElement.appendChild(divCounterPlayerOne.element);

    const divCounterPlayerOneText = new CreateElement("P", "counter__player-one-turn", "Players 1's turn");
    divCounterPlayerOne.element.appendChild(divCounterPlayerOneText.element);

    const divCounterPlayerOneTime = new CreateElement("P", "counter__player-one-turn-time", "15s");
    divCounterPlayerOne.element.appendChild(divCounterPlayerOneTime.element);

    const divCounterPlayerOneBackground = new CreateImage("IMG", "div__counter__player__one-background", "/CFG-main/assets/images/turn-background-red.svg", "Player 1's turn");
    divCounterPlayerOne.element.appendChild(divCounterPlayerOneBackground.element);
}

export default makeCountdown;

/////////////////////////////////////PLAYER TWO COUNTDOWN/////////////////////////////////////////

// const divCounterPlayerTwo = document.createElement("DIV");
// divCounterPlayerTwo.className = "counter__player-two";

// const divCounterPlayerTwoText = document.createElement("P");
// divCounterPlayerTwoText.className = "counter__player-two-turn";

// const divCounterPlayerTwoTime = document.createElement("P");
// divCounterPlayerTwoTime.className = "counter__player-two-turn-time";

// const divCounterPlayerTwoBackground = document.createElement("IMG");
// divCounterPlayerTwoBackground.src = "./assets/images/turn-background-yellow.svg";
// divCounterPlayerTwoBackground.alt = "Player 2 turn";
// divCounterPlayerTwoBackground.className = "div__counter__player__two-background";
