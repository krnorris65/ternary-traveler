
export default {
    buildHtml(elementType, elementId, elementText) {
        let htmlElement = document.createElement(elementType);
        if(elementId){
            htmlElement.id = elementId;
        }
        if(elementText){
            htmlElement.textContent = elementText
        }
        return htmlElement;
    },
    buildOption(elementText, elementValue){
        const optionEl = document.createElement("option")
        optionEl.textContent = elementText
        optionEl.value = elementValue

        return optionEl
    },
    clearElement(el) {
        while(el.firstChild){
            el.removeChild(el.firstChild)
        }
    }
}