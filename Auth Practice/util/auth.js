import axios from "axios";

const API_KEY = 'AIzaSyCOF2EQSxJLYgeSw23AGwMGgN7srydD5gY';

export async function createUser(email, password) {
    try {
        const response = await axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
            {
                email: email,
                password: password,
                returnSecureToken: true,
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error creating user:", error.response ? error.response.data : error.message);
        throw error;
    }
}
