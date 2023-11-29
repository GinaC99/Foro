import {api, getResponse, escalateError} from "./index";

export default class usersActions {
    static async getUsers() {
        return api.get('/usuario')
        .then(getResponse)
        .catch(escalateError)
    }
    static async createUser(body) {
        return api.post('/usuario', body)
        .then(getResponse)
        .catch(escalateError)
    }
    
    // esta ruta es para cuando tenga un backend propio
    static async searchUserById (userId) {
        return api.get(`/usuario?userId=${userId}`)
    }
}