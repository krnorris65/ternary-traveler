import apiManager from "../apiManager"
import interestDom from "./interestDom"
// import domManager from "../domManager"

export default {
    initialElements(){
        const domEl = document.getElementById("display-container")
        domEl.appendChild(interestDom.createBaseElements())
    },
    listAllInterests() {
        const domEl = document.getElementById("interest-display")
        // domManager.clearElement(domEl)

        apiManager.getAllInterests().then(interestArray => {
            const domFrag = document.createDocumentFragment()
            //iterate over response and create dom element for each interest and append to dom fragment
            interestArray.forEach(interest => {
                domFrag.appendChild(interestDom.createIntSection(interest))
            })

            domEl.appendChild(domFrag)

        })
    }
}