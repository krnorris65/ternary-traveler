import apiManager from "../apiManager"
import interests from "./interests"

export default {
    postInterest(){
        event.preventDefault()
        const nameInput = document.getElementById("name-input")
        const descriptionInput = document.getElementById("description-input")
        const costInput = document.getElementById("cost-input")
        const placeInput = document.getElementById("place-input")

        const newInterest = {
            name: nameInput.value,
            description: descriptionInput.value,
            cost: parseFloat(costInput.value).toFixed(2),
            placeId: parseInt(placeInput.value),
            review: ""
        }


        apiManager.postInterest(newInterest).then(interests.listAllInterests)
    }
}