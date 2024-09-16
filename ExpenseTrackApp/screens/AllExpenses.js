import { Text } from "react-native"
import ExpenseOutput from "../constants/components/expense-output/ExpensesOuput"
import { useContext } from "react"
import { ExpenseContext } from "../store/expsense-context"

function AllExpsenses(){
  const {expenses}  =  useContext(ExpenseContext);
    return <ExpenseOutput expenses={expenses} periodName="Total"/>
}

export default AllExpsenses