import CreateElement from "./CreateElement.js";

export default class CreateImage extends CreateElement {
    constructor(element, className, src, alt){
        super(element, className)
        this.element.src = src
        this.element.alt = alt 
    }
}