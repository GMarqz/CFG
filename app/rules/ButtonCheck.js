import CreateElement from "../classes/CreateElement.js";
import CreateImage from "../classes/CreateImage.js";

function createButtonCheck(parentElement){
    const containerDivButtonCheckIcon = new CreateElement("DIV", "button__check", '');
    parentElement.appendChild(containerDivButtonCheckIcon.element);

    const imgButtonCheckIcon = new CreateImage("IMG", "icon__check", "/CFG-main/assets/images/icon-check.svg", "Check");
    containerDivButtonCheckIcon.element.appendChild(imgButtonCheckIcon.element);


    containerDivButtonCheckIcon.element.addEventListener('click', () => {
        location.reload();
    })
}

export default createButtonCheck;