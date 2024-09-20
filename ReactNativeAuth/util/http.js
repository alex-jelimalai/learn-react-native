import axios from "axios";

const API_KEY = "AIzaSyDRoWJ8k5aZRmtIvl3HwzyimBhlPZDpdXI";

const BASE_URL = 'https://identitytoolkit.googleapis.com/v1/accounts'




export async function authenticate(mode, email, password) {
    const response = await axios.post(`${BASE_URL}:${mode}?key=${API_KEY}`, {
        email,
        password,
        returnSecureToken: true
    });
    return response.data.idToken;
}

export function createUser(email, password) {
    return authenticate("signUp", email, password)

}

export function login(email, password) {
    return authenticate("signInWithPassword", email, password)
}