import variablesArray from "./variables.js";

const main = variablesArray[0];
const header = variablesArray[1];
const inGameHeaderMenuBtn = variablesArray[2];
const inGameHeaderLogo = variablesArray[3];
const inGameHeaderRestartBtn = variablesArray[4];
const inGameMainSection = variablesArray[5];
const divPlayers = variablesArray[6];
const divPlayersPlayerOne = variablesArray[7];
const divPlayersPlayerOneText = variablesArray[8];
const divPlayersPlayerOnePoints = variablesArray[9];
const imgPlayerOne = variablesArray[10];
const divPlayersPlayerTwo = variablesArray[11];
const divPlayersPlayerTwoText = variablesArray[12];
const divPlayersPlayerTwoPoints = variablesArray[13];
const imgPlayerTwo = variablesArray[14];
const imgBlackLayer = variablesArray[15];
const imgWhiteLayer = variablesArray[16];
const divCounterPlayerOne = variablesArray[17];
const divCounterPlayerOneText = variablesArray[18];
const divCounterPlayerOneTime = variablesArray[19];
const divCounterPlayerOneBackground = variablesArray[20];
const divCounterPlayerTwo = variablesArray[21];
const divCounterPlayerTwoText = variablesArray[22];
const divCounterPlayerTwoTime = variablesArray[23];
const divCounterPlayerTwoBackground = variablesArray[24];
const divRetangule = variablesArray[25];
const divWinnerWarning = variablesArray[26];
const divWinnerPointed = variablesArray[27];
const divWinnerWins = variablesArray[28];
const divWinnerButton = variablesArray[29];

function startGameVsPlayer() {

   main.appendChild(header);

   header.appendChild(inGameHeaderMenuBtn);
   inGameHeaderMenuBtn.innerHTML = "MENU";
   header.appendChild(inGameHeaderLogo);
   header.appendChild(inGameHeaderRestartBtn);
   inGameHeaderRestartBtn.innerHTML = "RESTART";

   main.appendChild(inGameMainSection);
   inGameMainSection.appendChild(divPlayers);
   divPlayers.appendChild(divPlayersPlayerOne);
   divPlayersPlayerOne.appendChild(divPlayersPlayerOneText);
   divPlayersPlayerOneText.innerHTML = "Player 1";
   divPlayersPlayerOne.appendChild(divPlayersPlayerOnePoints);
   divPlayersPlayerOnePoints.innerHTML = 0;
   divPlayersPlayerOne.appendChild(imgPlayerOne);
   divPlayers.appendChild(divPlayersPlayerTwo);
   divPlayersPlayerTwo.appendChild(divPlayersPlayerTwoText);
   divPlayersPlayerTwoText.innerHTML = "Player 2";
   divPlayersPlayerTwo.appendChild(divPlayersPlayerTwoPoints);
   divPlayersPlayerTwoPoints.innerHTML = 0;
   divPlayersPlayerTwo.appendChild(imgPlayerTwo);

   inGameMainSection.appendChild(imgBlackLayer);
   inGameMainSection.appendChild(imgWhiteLayer);
  
   main.appendChild(divCounterPlayerOne);
   divCounterPlayerOne.appendChild(divCounterPlayerOneText);
   divCounterPlayerOneText.innerHTML = "Players 1's turn";
   divCounterPlayerOne.appendChild(divCounterPlayerOneTime);
   divCounterPlayerOneTime.innerHTML = "15s";
   divCounterPlayerOne.appendChild(divCounterPlayerOneBackground);
  
   main.appendChild(divRetangule);

   /*main.appendChild(divCounterPlayerTwo);
   divCounterPlayerTwo.appendChild(divCounterPlayerTwoText);
   divCounterPlayerTwoText.innerHTML = "Player 2's turn";
   divCounterPlayerTwo.appendChild(divCounterPlayerTwoTime);
   divCounterPlayerTwoTime.innerHTML = "15s";
   divCounterPlayerTwo.appendChild(divCounterPlayerTwoBackground);
  */
   /*
   main.appendChild(divWinnerWarning);
   divWinnerWarning.appendChild(divWinnerPointed);
   divWinnerPointed.innerHTML = "Player 1";
   divWinnerWarning.appendChild(divWinnerWins);
   divWinnerWins.innerHTML = "Wins";
   divWinnerWarning.appendChild(divWinnerButton);
   divWinnerButton.innerHTML = "Play Again";
   */

   document.body.innerHTML = '';
   document.body.appendChild(main);  

}

const sovem = document.querySelector(".container__button__vsplayer");
sovem.addEventListener('click', startGameVsPlayer);

export default startGameVsPlayer;
