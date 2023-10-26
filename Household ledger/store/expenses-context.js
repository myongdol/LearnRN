import { createContext, useReducer } from 'react';
import { DUMMY_EXPENSES } from '../assets/data/dummyData';



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
            const ID = new Date().toISOString() + Math.random().toString();
            return [{...action.payload, id: ID}, ...state];
        case 'SET':
            return action.payload;
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
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

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