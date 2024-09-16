
import { useContext, useEffect, useState } from "react"
import ExpenseOutput from "../constants/components/expense-output/ExpensesOuput"
import { ExpenseContext } from "../store/expsense-context"
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../ui/LoadingOverlay";
import ErrorOverlay from "../ui/ErrorOverlay";

function RecentExpenses() {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7)
    const { expenses, setExpsenses } = useContext(ExpenseContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const periodExpenses = expenses.filter(it => it.date >= date7DaysAgo);

    useEffect(() => {
        async function getExpenses() {
            setLoading(true)
            try {
                const expenses = await fetchExpenses();
                setExpsenses(expenses);
            } catch (erro) {
                setError("Could not fetch data")
            }
            setLoading(false)
        }
        getExpenses();

    }, []);

    if(!loading && error){
        return <ErrorOverlay message={error} onConfirm={()=>setError(null)}/>
    }

    return loading ? <LoadingOverlay /> : <ExpenseOutput periodName="Last 7 days" expenses={periodExpenses} />
}

export default RecentExpenses