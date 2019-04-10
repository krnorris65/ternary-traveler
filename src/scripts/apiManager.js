const apiUrl = "http://localhost:8088"

export default {
    getAllPlaces() {
        return fetch(`${apiUrl}/places?_embed=interests`)
            .then(response => response.json())
    },
    getAllInterests() {
        return fetch(`${apiUrl}/interests?_expand=place`)
        .then(response => response.json())
    },
    postInterest(newObj) {
        return fetch(`${apiUrl}/interests`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(response => response.json())
    },
    patchInterest(id, newObj) {
        return fetch(`${apiUrl}/interests/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(response => response.json())
    },
    deleteInterest(id) {
        return fetch(`${apiUrl}/interests/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())

    }
}