const apiUrl = "http://localhost:8088"

export default {
    getAll(resource) {
        return fetch(`${apiUrl}/${resource}`)
            .then(response => response.json())
    },
    getOne(resource, id) {
        return fetch(`${apiUrl}/${resource}/${id}`)
            .then(response => response.json())
    },
    post(resource, newObj) {
        return fetch(`${apiUrl}/${resource}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(response => response.json())
    },
    put(resource, id, newObj) {
        return fetch(`${apiUrl}/${resource}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
        }).then(response => response.json())
    },
    delete(resource, id) {
        return fetch(`${apiUrl}/${resource}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => response.json())

    }
}