import { StyleSheet, Text, View } from "react-native";
import Input from './Input'
import { useState } from "react";


function ExpenseForm() {

    const [INPUT_VALUE, setINPUT_VALUE] = useState({
        amount: '',
        date: '',
        description: ''
    });


    function inputChangeHandler(inputIdentifier, enteredValue) {
        setINPUT_VALUE((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    };


    return (
        <View style={STYLES.formContainer}>
            <Text style={STYLES.title}>지출내역 추가 하기</Text>
            <View style={STYLES.inputRow}>
                <Input label="가격" style={STYLES.rowInput} textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: INPUT_VALUE.amount,
                }}
                />
                <Input label="날짜" style={STYLES.rowInput} textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: INPUT_VALUE.date,
                }}
                />
            </View>
            <Input label="설명" textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: INPUT_VALUE.description,
            }}/>
        </View>
    )
};

export default ExpenseForm;

const STYLES = StyleSheet.create({
    formContainer: {
        marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center',
    }, 
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowInput: {
        flex: 1,
    }
})