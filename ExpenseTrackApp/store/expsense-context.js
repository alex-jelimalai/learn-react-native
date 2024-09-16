import { createContext, useReducer } from "react";


export const ExpenseContext = createContext({
    expsenses: [],
    setExpsenses: (expsenses) => { },
    addExpense: ({ description, amount, date }) => { },
    deleteExpense: (id) => { },
    updateExpense: (id, { description, amount, date }) => { }
});

function expsenseReducer(state, action) {
    switch (action.type) {
        case 'ADD': {
            return [action.payload, ...state]
        }
        case 'SET': {
            return action.payload.reverse();
        }
        case 'UPDATE': {
            const index = state.findIndex(e => e.id === action.payload.id)
            const updatedItem = { ...state[index], ...action.payload.data }
            const updatedExpenses = [...state]
            updatedExpenses[index] = updatedItem;
            return updatedExpenses
        }
        case 'DELETE': {
            return state.filter(s => s.id !== action.payload)
        }
        default: {
            return state;
        }
    }
}

function ExpenseContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expsenseReducer, []);

    function addExpense(expenseData) {
        dispatch({ type: 'ADD', payload: expenseData })
    };

    function setExpsenses(expenses) {
        dispatch({ type: 'SET', payload: expenses })
    }

    function deleteExpense(id) {
        dispatch({ type: 'DELETE', payload: id })
    };


    function updateExpense(id, expenseData) {
        dispatch({ type: 'UPDATE', payload: { id, data: expenseData } })
    };

    const value = {
        expenses: expensesState,
        addExpense,
        setExpsenses,
        deleteExpense,
        updateExpense
    }

    return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>;
}

export default ExpenseContextProvider;   