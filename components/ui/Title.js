import { StyleSheet, Text } from "react-native";


function Title({children}) {
    return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        paddingTop: 16,
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        fontFamily: 'open-bold'
    },
})