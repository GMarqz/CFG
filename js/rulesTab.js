function makeRules() {
  const rulesSection = document.createElement("SECTION");
  rulesSection.className = "container__rules";
  
  const rulesSectionHeaderTwo = document.createElement("H2");
  rulesSectionHeaderTwo.className = "container__rules-htwo";
  
  const rulesSectionHeaderThree = document.createElement("H3");
  
  const rulesSectionParagraph = document.createElement("P");
  rulesSectionParagraph.className = "container_rules_paragraph";

  const rulesSectionHeaderThreet = document.createElement("H3");

  const divLista = document.createElement("DIV");
  divLista.className = "lista";

  const divListFirstItem = document.createElement("DIV");
  divListFirstItem.className = "list";
  const divListFirstItemSpan = document.createElement("SPAN");

  const divListSecondItem = document.createElement("DIV");
  divListSecondItem.className = "list";
  const divListSecondItemSpan = document.createElement("SPAN");

  const divListThirdItem = document.createElement("DIV");
  divListThirdItem.className = "list";
  const divListThirdItemSpan = document.createElement("SPAN");

  const divListFourthItem = document.createElement("DIV");
  divListFourthItem.className = "list";
  const divListFourthItemSpan = document.createElement("SPAN");

  const divButtonCheckIcon = document.createElement("DIV");
  divButtonCheckIcon.className = "button__check";
  const imgButtonCheckIcon = document.createElement("IMG");
  imgButtonCheckIcon.className = "icon__check";
  imgButtonCheckIcon.src = "./assets/images/icon-check.svg";
  imgButtonCheckIcon.alt = "check";


  rulesSection.appendChild(rulesSectionHeaderTwo);
  rulesSectionHeaderTwo.innerHTML = "RULES";

  rulesSection.appendChild(rulesSectionHeaderThree);
  rulesSectionHeaderThree.innerHTML = "OBJECTIVE";

  rulesSection.appendChild(rulesSectionParagraph);
  rulesSectionParagraph.innerHTML = "Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).";

  rulesSection.appendChild(rulesSectionHeaderThreet);
  rulesSectionHeaderThreet.innerHTML = "HOW TO PLAY";
  
  rulesSection.appendChild(divLista);
  divLista.appendChild(divListFirstItem);
  divListFirstItem.appendChild(divListFirstItemSpan);
  divListFirstItemSpan.innerHTML = "Red goes first in the first game.";

  divLista.appendChild(divListSecondItem);
  divListSecondItem.appendChild(divListSecondItemSpan);
  divListSecondItemSpan.innerHTML = "Players must alternate turns, and only one disc can be dropped in each turn.";

  divLista.appendChild(divListThirdItem);
  divListThirdItem.appendChild(divListThirdItemSpan);
  divListThirdItemSpan.innerHTML = "The game ends when there is a 4-in-a-row or a stalemate.";

  divLista.appendChild(divListFourthItem);
  divListFourthItem.appendChild(divListFourthItemSpan);
  divListFourthItemSpan.innerHTML = "The starter of the previous game goes second on the next game.";
  
  rulesSection.appendChild(divButtonCheckIcon);
  divButtonCheckIcon.appendChild(imgButtonCheckIcon);
  divButtonCheckIcon.addEventListener('click', () => {
    location.reload();
  });
        document.body.innerHTML = '';
        document.body.appendChild(rulesSection);  
}

//I have no idea of how the addEventListener is working. I'm exporting/importing ONLY the makeRules() however addEventLister is not being exported/imported.

const botao = document.getElementById('container__button__rules');

botao.addEventListener('click', makeRules);


export default makeRules;
