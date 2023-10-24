import { StyleSheet, Text, View } from "react-native";
import Input from './Input'
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";


function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defalutValue}) {

    const [INPUT_VALUE, setINPUT_VALUE] = useState({
        amount: defalutValue ? defalutValue.amount.toString() : '',
        date: defalutValue ? getFormattedDate(defalutValue.date) : '',
        description: defalutValue ? defalutValue.description : ''
    });


    function inputChangeHandler(inputIdentifier, enteredValue, defalutValue) {
        setINPUT_VALUE((curInputValues) => {
            return {
                ...curInputValues,
                [inputIdentifier]: enteredValue
            }
        });
    };

    function submitHandler () {
        const EXPENSE_DATA = {
            amount: +INPUT_VALUE.amount,
            date: new Date(INPUT_VALUE.date),
            description: INPUT_VALUE.description
        };

        onSubmit(EXPENSE_DATA);
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
            <View style={STYLES.buttons}>
                <Button onPress={submitHandler} style={STYLES.button}>
                    {submitButtonLabel}
                </Button>
                <Button mode='flat' onPress={onCancel} style={STYLES.button}>
                    취소
                </Button>
            </View>
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
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})