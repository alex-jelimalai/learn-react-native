import { useContext, useLayoutEffect, useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../constants/styles";
import { ExpenseContext } from "../store/expsense-context"
import ExpenseForm from "../constants/components/ManageExpense/ExpenseForm";
import { storeExpense, updateExpenseApi, deleteExpenseApi } from "../util/http";
import LoadingOverlay from "../ui/LoadingOverlay";
import ErrorOverlay from "../ui/ErrorOverlay";


function ManageExpense({ route, navigation }) {
    const manageExpenseId = route.params?.expenseId;
    const { addExpense, updateExpense, deleteExpense, expenses } = useContext(ExpenseContext);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState();

    useLayoutEffect(
        () => {
            navigation.setOptions({
                title: !!manageExpenseId ? 'Edit Expense' : 'Add Expense'
            });
        }, [manageExpenseId, navigation]);

    const selectedExpense = expenses.find(e => e.id === manageExpenseId)

    function deleteExpenseHandler() {
        setSaving(true);
        try {
            deleteExpenseApi(manageExpenseId)
            deleteExpense(manageExpenseId)
            navigation.goBack();
        } catch (error) {
            setError("Could not be deleted")
        }

        setSaving(false)

    }

    function cancelExpenseHandler() {
        navigation.goBack();
    }

    async function confirmExpenseHandler(data) {
        setSaving(true)
        try {
            if (!!manageExpenseId) {
                updateExpenseApi(data.id, data)
                updateExpense(manageExpenseId, data)
            } else {
                const id = await storeExpense(data);
                addExpense({ id, ...data })
            }
            navigation.goBack();
        } catch (error) {
            setError("Could not be saved")
        }
        setSaving(false)

    }

    if (error && !saving) {
        return <ErrorOverlay message={error} onConfirm={() => setError(null)} />
    }

    if (saving) {
        return <LoadingOverlay />
    }

    return <View style={styles.container}>
        <ExpenseForm onCancel={cancelExpenseHandler}
            defaultData={selectedExpense}
            submitButtonLabel={!!manageExpenseId ? 'Update' : 'Add'}
            onSubmit={confirmExpenseHandler} />

        {!!manageExpenseId && <View style={styles.deleteContainer}>
            <IconButton icon='trash' color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler} />
        </View>}
    </View>
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },


    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})