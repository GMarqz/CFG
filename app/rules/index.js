import CreateElement from "../classes/CreateElement.js";
import makeRulesList from "./RulesList.js";
import createButtonCheck from "./ButtonCheck.js";

function makeRules() {
    const rulesSection = new CreateElement("SECTION", "container__section", '');

    const containerDiv = new CreateElement("DIV", "container__rules", '');
    rulesSection.element.appendChild(containerDiv.element);

    const containerDivHeading = new CreateElement("H2", "container__rules-htwo", "RULES");
    containerDiv.element.appendChild(containerDivHeading.element);

    const containerDivSubHeading = new CreateElement("H3", "", "OBJECTIVE");
    containerDiv.element.appendChild(containerDivSubHeading.element);

    const containerDivParagraph = new CreateElement("P", "container_rules_paragraph", "Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).");
    containerDiv.element.appendChild(containerDivParagraph.element);

    const containerODivSubHeading = new CreateElement("H3", "", "HOW TO PLAY");
    containerDiv.element.appendChild(containerODivSubHeading.element);

    createButtonCheck(containerDiv.element);
    makeRulesList(containerDiv.element);
   
    document.body.innerHTML = '';
    document.body.appendChild(rulesSection.element); 

}

const backToMenuBtn = document.getElementById('container__button__rules');

backToMenuBtn.addEventListener('click', makeRules);

export default makeRules;
