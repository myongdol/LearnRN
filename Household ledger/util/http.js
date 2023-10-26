import axios from "axios";

export function storeExpense(expenseData) {
    axios.post(
    'https://reactnative-51dc6-default-rtdb.firebaseio.com/expenses.json',
    expenseData
    );
};