import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";



function Input({ label, textInputConfig }) {

    let inputStyles = [STYLES.input];
    if(textInputConfig && textInputConfig.multiline) {
        inputStyles.push(STYLES.inputMultiline)
    }

    return (
        <View style={STYLES.inputContainer}>
            <Text style={STYLES.label}>{label}</Text>
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
    }
});