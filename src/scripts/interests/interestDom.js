import domManager from "../domManager"

export default {
    initialElements(){
        const domEl = document.getElementById("display-container")
        domEl.appendChild(domManager.buildHtml("h1", undefined, "Interests"))
        domEl.appendChild(domManager.buildHtml("button", "new-interest-button", "New Interest"))
        domEl.appendChild(domManager.buildHtml("section", "interest-form"))
        domEl.appendChild(domManager.buildHtml("section", "interest-display"))
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
    }
}