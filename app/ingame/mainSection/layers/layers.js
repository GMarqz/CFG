import CreateElement from "../../../classes/CreateElement.js";
import CreateImage from "../../../classes/CreateImage.js";

function makeGameArea(parentElement){
    const divLayers = new CreateElement("DIV", "ingame__div-Layers", '');
    parentElement.appendChild(divLayers.element);

    const imgBlackLayer = new CreateImage("IMG", "board__layer-black", "/CFG-main/assets/images/board-layer-black-small.svg", "");
    divLayers.element.appendChild(imgBlackLayer.element);

    const imgWhiteLayer = new CreateImage("IMG", "board__layer-white", "/CFG-main/assets/images/board-layer-white-small.svg", "");
    divLayers.element.appendChild(imgWhiteLayer.element);
}

export default makeGameArea;
