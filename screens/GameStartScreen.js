import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameStartScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>확인</PrimaryButton>
            <PrimaryButton>초기화</PrimaryButton>
        </View>
    )
};

export default GameStartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#72063c',
        borderRadius: 12,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    }
});