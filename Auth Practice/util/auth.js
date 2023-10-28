import { Axios } from "axios";

const API_KEY = 'AIzaSyCOF2EQSxJLYgeSw23AGwMGgN7srydD5gY';

async function createUser(email, password) {
    const RESPONSE = await Axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=' + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        }
    );
};