import { Platform, StyleSheet, Text } from "react-native";


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
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // borderWidth: Platform.select({ ios: 0, android: 2 }),
        // borderWidth: 0,
        // borderColor: 'white',
        padding: 12,
        fontFamily: 'open-bold',
        maxWidth: '80%',
        width: 300,
    },
})