import axios from "axios";

const API_KEY = 'AIzaSyCOF2EQSxJLYgeSw23AGwMGgN7srydD5gY';




export async function authUser(mode, email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

    const response = await axios.post(url, {
        email: email,
        password: password,
        returnSecureToken: true,
    });

    console.log(response.data);
};


export async function createUser(email, password) {
    await authUser('signUp', email, password)
};

export async function login(email, password) {
    await authUser('signInWithPassword', email, password);
}