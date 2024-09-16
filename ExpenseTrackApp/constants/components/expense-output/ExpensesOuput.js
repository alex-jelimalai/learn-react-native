import { View, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../styles";

function ExpenseOutput({ expenses, periodName }) {
    let content = <Text style={styles.infoText}>No Expenses Registered</Text>

    return <View style={styles.container}>
        <ExpensesSummary expenses={expenses} periodName={periodName} />
        {expenses.length ? <ExpensesList expenses={expenses} /> : content}
    </View>
}

export default ExpenseOutput;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 2,
        paddingBottom: 40,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }
})