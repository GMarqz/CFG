

const main = document.createElement("MAIN");
main.className = "ingame";

////////////////////////////////////////HEADER///////////////////////////////////////
const header = document.createElement("HEADER");
header.className = "ingame__header";

const inGameHeaderMenuBtn = document.createElement("BUTTON");
inGameHeaderMenuBtn.className = "ingame__header__menu-btn";

const inGameHeaderLogo = document.createElement("IMG");
inGameHeaderLogo.className = "ingame__header__logo";
inGameHeaderLogo.src = "./assets/images/logo.svg";
inGameHeaderLogo.alt = "Game's Logo";

const inGameHeaderRestartBtn = document.createElement("BUTTON");
inGameHeaderRestartBtn.className = "ingame__header__restart-btn";

/////////////////////////////MAIN SECTION///////////////////////////////////

const inGameMainSection = document.createElement("SECTION");
inGameMainSection.className = "ingame__main";

const divPlayers = document.createElement("DIV");
divPlayers.className = "players";

///>>main section player one<<///
const divPlayersPlayerOne = document.createElement("DIV");
divPlayersPlayerOne.className = "players__player-one";

const divPlayersPlayerOneText = document.createElement("P");
divPlayersPlayerOneText.className = "ingame__main__player-one";

const divPlayersPlayerOnePoints = document.createElement("P");
divPlayersPlayerOnePoints.className = "ingame__main__points__player-one";

const imgPlayerOne = document.createElement("IMG");
imgPlayerOne.className = "img__player-one";
imgPlayerOne.src = "./assets/images/player-one.svg" ;

///>>main section player two<<///

const divPlayersPlayerTwo = document.createElement("DIV");
divPlayersPlayerTwo.className = "players__player-two";

const divPlayersPlayerTwoText = document.createElement("P");
divPlayersPlayerTwoText.className = "ingame__main__player-two";

const divPlayersPlayerTwoPoints = document.createElement("P");
divPlayersPlayerTwoPoints.className = "ingame__main__points__player-two";

const imgPlayerTwo = document.createElement("IMG");
imgPlayerTwo.className = "img__player-two";
imgPlayerTwo.src = "assets/images/player-two.svg";

/////////////////////////////////////////LAYERS//////////////////////////////////////////

const imgBlackLayer = document.createElement("IMG");
imgBlackLayer.className = "board__layer-black";
imgBlackLayer.src = "./assets/images/board-layer-black-small.svg";

const imgWhiteLayer = document.createElement("IMG");
imgWhiteLayer.className = "board__layer-white";
imgWhiteLayer.src = "./assets/images/board-layer-white-small.svg";

///////////////////////////////////////PLAYER ONE COUNTDOWN////////////////////////////////////////

const divCounterPlayerOne = document.createElement("DIV");
divCounterPlayerOne.className = "counter__player-one";

const divCounterPlayerOneText = document.createElement("P");
divCounterPlayerOneText.className = "counter__player-one-turn";

const divCounterPlayerOneTime = document.createElement("P");
divCounterPlayerOneTime.className = "counter__player-one-turn-time";

const divCounterPlayerOneBackground = document.createElement("IMG");
divCounterPlayerOneBackground.src = "./assets/images/turn-background-red.svg";
divCounterPlayerOneBackground.alt = "Player 1 turn";

/////////////////////////////////////PLAYER TWO COUNTDOWN/////////////////////////////////////////

const divCounterPlayerTwo = document.createElement("DIV");
divCounterPlayerTwo.className = "counter__player-two";

const divCounterPlayerTwoText = document.createElement("P");
divCounterPlayerTwoText.className = "counter__player-two-turn";

const divCounterPlayerTwoTime = document.createElement("P");
divCounterPlayerTwoTime.className = "counter__player-two-turn-time";

const divCounterPlayerTwoBackground = document.createElement("IMG");
divCounterPlayerTwoBackground.src = "./assets/images/turn-background-yellow.svg";
divCounterPlayerTwoBackground.alt = "Player 2 turn";

//////////////////////////////////////WINNER//////////////////////////////////////

const divRetangule = document.createElement("DIV");
divRetangule.className = "retangule";

const divWinnerWarning = document.createElement("DIV");
divWinnerWarning.className = "winner__warning";

const divWinnerPointed = document.createElement("P");
divWinnerPointed.className = "winner__pointed";

const divWinnerWins = document.createElement("P");
divWinnerWins.className = "wins";

const divWinnerButton = document.createElement("BUTTON");
divWinnerButton.className = "play-again";

///////////////////////array/////////////////////

const variablesArray = [
    main,
    header,
    inGameHeaderMenuBtn,
    inGameHeaderLogo,
    inGameHeaderRestartBtn,
    inGameMainSection,
    divPlayers,
    divPlayersPlayerOne,
    divPlayersPlayerOneText,
    divPlayersPlayerOnePoints,
    imgPlayerOne,
    divPlayersPlayerTwo,
    divPlayersPlayerTwoText,
    divPlayersPlayerTwoPoints,
    imgPlayerTwo,
    imgBlackLayer,
    imgWhiteLayer,
    divCounterPlayerOne,
    divCounterPlayerOneText,
    divCounterPlayerOneTime,
    divCounterPlayerOneBackground,
    divCounterPlayerTwo,
    divCounterPlayerTwoText,
    divCounterPlayerTwoTime,
    divCounterPlayerTwoBackground,
    divRetangule,
    divWinnerWarning,
    divWinnerPointed,
    divWinnerWins,
    divWinnerButton
]

export default variablesArray;
