import CreateElement from "../../../classes/CreateElement.js";

function makeRetangule(parentElement){
    const divRetangule = new CreateElement("DIV", "retangule", '');
    parentElement.appendChild(divRetangule.element);

    // const divWinnerWarning = new CreateElement("DIV", "winner__warning", '');
    // parentElement.appendChild(divWinnerWarning.element);

    // const divWinnerPointed = new CreateElement("P", "winner__pointed", "Player 1");
    // divWinnerWarning.element.appendChild(divWinnerPointed.element);

    // const divWinnerWins = new CreateElement("P", "wins", "Wins");
    // divWinnerWarning.element.appendChild(divWinnerWins.element);

    // const divWinnerButton = new CreateElement("BUTTON", "play-again", "Play Again");
}

export default makeRetangule;