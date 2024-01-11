import CreateElement from "../classes/CreateElement.js";

function makeRulesList(parentElement) {

    const divList = new CreateElement("UL", "lista", '');
    parentElement.appendChild(divList.element);

    const divListFirstItem = new CreateElement("LI", "list", "Red goes first in the first game.");
    divList.element.appendChild(divListFirstItem.element);
  
    const divListSecondItem = new CreateElement("LI", "list", "Players must alternate turns, and only one disc can be dropped in each turn.");
    divList.element.appendChild(divListSecondItem.element);

    const divListThirdItem = new CreateElement("LI", "list", "The game ends when there is a 4-in-a-row or a stalemate.");
    divList.element.appendChild(divListThirdItem.element);
  
    const divListFourthItem = new CreateElement("LI", "list", "The starter of the previous game goes second on the next game.");
    divList.element.appendChild(divListFourthItem.element);
  }

  export default makeRulesList;