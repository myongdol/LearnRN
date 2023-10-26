import axios from "axios";

const SERVER_URL = 'https://reactnative-51dc6-default-rtdb.firebaseio.com'

export function storeExpense(expenseData) {
    axios.post(
    SERVER_URL + '/expenses.json',
    expenseData
    );
};

export async function fetchExpense() {
    const RESPONSE = await axios.get(
        SERVER_URL + '/expenses.json',
        );

    const EXPENSE = [];

    // console.log(RESPONSE.data)
    
    for (const KEY in RESPONSE.data) {
        const EXPENSE_OBJ = {
            id : KEY,
            amount: RESPONSE.data[KEY].amount,
            date: new Date(RESPONSE.data[KEY].date),
            description: RESPONSE.data[KEY].description,
        };

        EXPENSE.push(EXPENSE_OBJ);
    };
    return EXPENSE;
};