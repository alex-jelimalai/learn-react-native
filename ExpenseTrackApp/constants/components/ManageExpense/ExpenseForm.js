import { View, StyleSheet, Text, Alert } from "react-native";
import Input from "./Input";
import { useState } from "react";
import Button from "../../../ui/Button";
import { GlobalStyles } from "../../styles";

function ExpenseForm({ onSubmit, submitButtonLabel, onCancel, defaultData }) {
    const [amountValue, setAmountValue] = useState({ value: defaultData?.amount?.toString(), isValid: true });
    const [descriptionValue, setDescriptionValue] = useState({ value: defaultData?.description || '', isValid: true });
    const [dateValue, setDateValue] = useState({ value: defaultData?.date?.toISOString(), isValid: true });


    function amountChangedHandler(v) {
        setAmountValue({ value: v, isValid: true })
    }

    function dateChangedHandler(v) {
        setDateValue({ value: v, isValid: true })
    }
    function descriptionChangedHandler(v) {
        setDescriptionValue({ value: v, isValid: true });
    }

    function submitHandler() {
        const expenseData = {
            amount: +amountValue.value,
            date: new Date(dateValue.value),
            description: descriptionValue.value
        };
        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descriptionIsValid = expenseData.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setAmountValue({ value: amountValue.value, isValid: amountIsValid });
            setDateValue({ value: dateValue.value, isValid: dateIsValid });
            setDescriptionValue({ value: descriptionValue.value, isValid: descriptionIsValid })
            return;
        }
        onSubmit(expenseData);
    }

    const formIsInvalid = !amountValue.isValid || !dateValue.isValid || !descriptionValue.isValid

    return <View style={styles.form}>
        <Text style={styles.title}>Your Expense</Text>
        <View style={styles.inputRows}>
            <Input label="Amount"
                style={styles.rowInput}
                invalid={!amountValue.isValid}
                textInputConfig={{
                    keyboardTape: 'decimal-pad',
                    onChangeText: amountChangedHandler,
                    value: amountValue.value
                }} />

            <Input label="Date"
                style={styles.rowInput}
                invalid={!dateValue.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    onChangeText: dateChangedHandler,
                    maxLength: 10,
                    value: dateValue.value
                }} />
        </View>
        <Input label="Description"
            invalid={!descriptionValue.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: descriptionChangedHandler,
                value: descriptionValue.value

            }} />
        {formIsInvalid && <Text style={styles.errorText}>Please check input data</Text>}
        <View style={styles.buttons}>
            <Button mode='flat' onPress={onCancel} style={styles.button}>
                Cancel
            </Button>
            <Button onPress={submitHandler} style={styles.button}>
                {submitButtonLabel}
            </Button>
        </View>
    </View>
}

export default ExpenseForm;


const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },
    inputRows: {

        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        minWidth: 120,
        marginHorizontal: 10
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        marginBottom: 8
    }
})