import { StyleSheet, Text } from "react-native";
import Colors from "../../constants/color";

function InstructionText({children}) {
    return (
        <Text style={styles.instructionText}>{content}</Text>
    )
};

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 18,
    }
});