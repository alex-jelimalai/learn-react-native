import axios from "axios";

const BASE_URL = "https://react-native-course-d31cf-default-rtdb.europe-west1.firebasedatabase.app";

export async function storeExpense(expenseData) {
    const response = await axios.post(
        `${BASE_URL}/expenses.json`,
        expenseData
    );
    const id = response.data.name;
    return id;
};

export async function fetchExpenses() {
    const response = await axios.get(
        `${BASE_URL}/expenses.json`
    );

    const expsenses = [];

    for (const key in response.data) {
        expsenses.push({ id: key, ...response.data[key], date: new Date(response.data[key].date) })
    }

    return expsenses;
}

export function updateExpenseApi(id, expenseData) {
    return axios.put(`${BASE_URL}/expenses/${id}.json`,
        expenseData
    )
}


export function deleteExpenseApi(id) {
    return axios.delete(`${BASE_URL}/expenses/${id}.json`);
}