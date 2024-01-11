import CreateElement from "../../classes/CreateElement.js";


function makePauseMenu(parentElement){
    const divPauseMenu = new CreateElement("DIV", "pause__menu", '');
    parentElement.appendChild(divPauseMenu.element);

    const divPauseMenuHeading = new CreateElement("H2", "", "PAUSE");
    divPauseMenu.element.appendChild(divPauseMenuHeading.element);

    const continueBtn = new CreateElement("BUTTON", "continue__btn", "CONTINUE GAME");
    divPauseMenu.element.appendChild(continueBtn.element);

    const restartBtn = new CreateElement("BUTTON", "restart__btn", "RESTART");
    divPauseMenu.element.appendChild(restartBtn.element);

    const quitBtn = new CreateElement("BUTTON", "quit__btn", "QUIT GAME");
    divPauseMenu.element.appendChild(quitBtn.element);
}


// document.addEventListener("DOMContentLoaded", function () {
//   const ingameheader = document.querySelector('.ingame__header');

//   ingameheader.addEventListener("click", function (event) {
//       if (event.target.matches('.ingame__header__menu-btn')) {
//           makePauseMenu();
//       }
//   });
// });


export default makePauseMenu;

