import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function ErrorOverlay({message}) {
    return (<View style={STYLES.container}>
        <Text style={[STYLES.text, STYLES.title]}>
            오류가 발생 했습니다.
        </Text>
        <Text style={STYLES.text}>  
            {message}
        </Text>
    </View>)
};

export default ErrorOverlay;

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
    },
    text: {
        textAlign: 'center',
        marginBottom: 8,
        color: 'white',
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
})