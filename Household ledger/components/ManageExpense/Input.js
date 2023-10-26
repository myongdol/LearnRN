import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";



function Input({ label, textInputConfig, style, invalid }) {

    let inputStyles = [STYLES.input];
    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(STYLES.inputMultiline)
    }

    if (invalid) {
        inputStyles.push(STYLES.invalidInput);
    }

    return (
        <View style={[STYLES.inputContainer, style]}>
            <Text style={[STYLES.label, invalid && STYLES.invalidLabel]}>{label}</Text>
            <TextInput style={inputStyles}
                {...textInputConfig}
            />
        </View>
    )
};

export default Input;

const STYLES = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8,
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4,
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        padding: 6,
        borderRadius: 6,
        fontSize: 18,
        color: GlobalStyles.colors.primary700,
    },
    inputMultiline:{
        minHeight: 100,
        textAlignVertical: 'top',
    },
    invalidLabel: {
        color: GlobalStyles.colors.error500,
    },
    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    },
});