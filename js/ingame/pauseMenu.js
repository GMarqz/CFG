const divPauseMenu = document.createElement("DIV");
divPauseMenu.className = "pause__menu";
const divPauseMenuHeading = document.createElement("H2");
const continueBtn = document.createElement("BUTTON");
continueBtn.className = "continue__btn";
const restartBtn = document.createElement("BUTTON");
restartBtn.className = "restart__btn";
const quitBtn = document.createElement("BUTTON");
quitBtn.className = "quit__btn";

function makePauseMenu() {
    divPauseMenu.appendChild(divPauseMenuHeading);
    divPauseMenuHeading.innerHTML = "PAUSE";
    divPauseMenu.appendChild(continueBtn);
    continueBtn.innerHTML = "CONTINUE GAME";
    divPauseMenu.appendChild(restartBtn);
    restartBtn.innerHTML = "RESTART";
    divPauseMenu.appendChild(quitBtn);
    quitBtn.innerHTML = "QUIT GAME";

    document.body.appendChild(divPauseMenu);
}

document.addEventListener("DOMContentLoaded", function () {
  const ingameheader = document.querySelector('.ingame__header');

  ingameheader.addEventListener("click", function (event) {
      if (event.target.matches('.ingame__header__menu-btn')) {
          makePauseMenu();
      }
  });
});


export default makePauseMenu;

/* ///////////////////////////////////////PAUSE MENU/////////////////////////////////////
<div class="pause__menu">
  <h2>PAUSE</h2>
  <button class="continue__btn">CONTINUE GAME</button>
  <button class="restart__btn">RESTART</button>
  <button class="quit__btn">QUIT GAME</button>
</div>
*/