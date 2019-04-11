import domManager from "../domManager"
import apiManager from "../apiManager";
import eventHandler from "./interestEventHandler"

export default {
    createBaseElements(){
        const domFrag = document.createDocumentFragment()
        domFrag.appendChild(domManager.buildHtml("h1", undefined, "Interests"))
        const formSection = domFrag.appendChild(domManager.buildHtml("section", "interest-form"))
        formSection.appendChild(this.createForm())
        domFrag.appendChild(domManager.buildHtml("section", "interest-display"))
        return domFrag
    },
    createIntSection(interest){
        //section
        const interestSection = domManager.buildHtml("section", `interest--${interest.id}`)
        //name
        interestSection.appendChild(domManager.buildHtml("h2", `name--${interest.id}`, `${interest.name}`))
        //place
        interestSection.appendChild(domManager.buildHtml("h4", `place--${interest.id}`, `${interest.place.name}`))
        //description
        interestSection.appendChild(domManager.buildHtml("p", `description--${interest.id}`, `${interest.description}`))
        //cost
        interestSection.appendChild(domManager.buildHtml("p", `cost--${interest.id}`, `$${interest.cost}`))
        //review
        if(interest.review){
            interestSection.appendChild(domManager.buildHtml("p", `review--${interest.id}`, `Review: ${interest.review}`))
        }

        return interestSection
    },
    createForm(){
        const formEl = document.createElement("form")

        //name label & input
        const nameFieldset = formEl.appendChild(document.createElement("fieldset"))
        nameFieldset.appendChild(domManager.buildHtml("label", undefined, "Name: "))
        nameFieldset.appendChild(domManager.buildHtml("input", "name-input"))

        //description label & textarea
        const descriptionFieldset = formEl.appendChild(document.createElement("fieldset"))
        descriptionFieldset.appendChild(domManager.buildHtml("label", undefined, "Description: "))
        descriptionFieldset.appendChild(domManager.buildHtml("textarea", "description-input"))

        //cost label & input
        const costFieldset = formEl.appendChild(document.createElement("fieldset"))
        costFieldset.appendChild(domManager.buildHtml("label", undefined, "Cost: "))
        const costInput = costFieldset.appendChild(domManager.buildHtml("input", "cost-input"))
        costInput.type = "number"
        costInput.min = "0"

        //place label & select
        const placeFieldset = formEl.appendChild(document.createElement("fieldset"))
        placeFieldset.appendChild(domManager.buildHtml("label", undefined, "Place: "))
        const placeSelect = placeFieldset.appendChild(domManager.buildHtml("select", "place-input"))

        placeSelect.appendChild(domManager.buildOption("Select Location", ""))
        //get request to get places for select options
        apiManager.getAllPlaces().then(placesArray => {
            placesArray.forEach(place => {
                placeSelect.appendChild(domManager.buildOption(`${place.name}`, `${place.id}`))
            })
        })

        const formButton = formEl.appendChild(domManager.buildHtml("button", "post-interest", "Save Interest"))

        formButton.addEventListener("click", eventHandler.postInterest)

        return formEl

    }
}