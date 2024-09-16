import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../styles";

function Input({ label, textInputConfig, style , invalid}) {

    const inputStyles = [styles.input];

    if (textInputConfig?.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if(invalid){
        inputStyles.push(styles.invalidInput)
    }

    return <View style={[styles.container, style]}>
        <Text style={styles.label}>{label}</Text>
        <TextInput {...textInputConfig} style={inputStyles} />
    </View>
}

export default Input;


const styles = StyleSheet.create({
    container: {
        marginVertical: 12,
        marginHorizontal: 4
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },

    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 2,
        borderRadius: 6,
        fontSize: 18,
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
})