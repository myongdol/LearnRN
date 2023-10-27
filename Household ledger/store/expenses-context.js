import { createContext, useReducer } from 'react';



export const EXPENSES_CONTEXT = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    setExpenses: (expenses) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});


function expensesReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [action.payload, ...state];
        case 'SET':
            const INVERTED = action.payload.reverse();
            return INVERTED;
        case 'UPDATE':
            const UADATE_EXPENSE_INDEX = state.findIndex(
                  (expense) => expense.id === action.payload.id
                );
                const UPDATABLE_EXPENSE = state[UADATE_EXPENSE_INDEX];
                const UPDATED_ITEM = { ...UPDATABLE_EXPENSE, ...action.payload.data };
                const UPDATED_EXPENSE = [...state];
                UPDATED_EXPENSE[UADATE_EXPENSE_INDEX] = UPDATED_ITEM;
                return UPDATED_EXPENSE;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state; 
    }
};


function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData });
    };

    function setExpenses(expenses) {
        dispatch({ type: 'SET', payload: expenses });
    };

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    };

    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData }})
    }

    const VALUE = {
        expenses: expensesState,
        setExpenses: setExpenses,
        addExpense: addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense,
    };

    return (
        <EXPENSES_CONTEXT.Provider value={VALUE}>
            {children}
        </EXPENSES_CONTEXT.Provider>
    )
};
export default ExpensesContextProvider;