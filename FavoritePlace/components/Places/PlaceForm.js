import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";


function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText)
    };

    return (
        <ScrollView style={STYLES.form}> 
             <View>
                <Text style={STYLES.label}>제목</Text>
                <TextInput 
                    style={STYLES.input}
                    onChange={changeTitleHandler}
                    value={enteredTitle}
                />
             </View>
        </ScrollView>
    )
};

export default PlaceForm;

const STYLES = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    }
});