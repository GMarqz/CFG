export default class CreateElement {
    constructor(element, className, content) {
        this.element = document.createElement(element);
        this.element.className = className;
        this.element.innerHTML = content;
    }
} 

