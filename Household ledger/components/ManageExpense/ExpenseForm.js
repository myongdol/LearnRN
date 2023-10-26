import { Alert, StyleSheet, Text, View } from "react-native";
import Input from './Input'
import { useState } from "react";
import Button from "../UI/Button";
import { getFormattedDate } from "../../util/date";
import { GlobalStyles } from "../../constants/styles";


function ExpenseForm({submitButtonLabel, onCancel, onSubmit, defalutValue}) {

    const [INPUTS, setINPUTS] = useState({
        amount: { 
            value: defalutValue ? defalutValue.amount.toString() : '',
            isValid: true,
        },
        date: {
            value : defalutValue ? getFormattedDate(defalutValue.date) : '',
            isValid: true,
        },
        description: {
            value : defalutValue ? defalutValue.description : '',
            isValid : true,
        }
    });


    function inputChangeHandler(inputIdentifier, enteredValue, defalutValue) {
        setINPUTS((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value : enteredValue, isValid: true}
            }
        });
    };

    function submitHandler () {
        const EXPENSE_DATA = {
            amount: +INPUTS.amount.value,
            date: new Date(INPUTS.date.value),
            description: INPUTS.description.value
        };

        const AMOUNT_IS_VALID = !isNaN(EXPENSE_DATA.amount) && EXPENSE_DATA.amount > 0;
        const DATA_IS_VALID = EXPENSE_DATA.date.toString() !== 'Invalid Date';
        const DESCRIPTION_IS_VALID = EXPENSE_DATA.description.trim().length > 0;

        if(!AMOUNT_IS_VALID || !DATA_IS_VALID || !DESCRIPTION_IS_VALID) {
            // Alert.alert('주의', '입력을 다시 확인 해주세요.');
            setINPUTS((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: AMOUNT_IS_VALID},
                    date: { value: curInputs.date.value, isValid: DATA_IS_VALID},
                    description: { value: curInputs.description.value, isValid: DESCRIPTION_IS_VALID},
                }
            })
            return;
        }

        onSubmit(EXPENSE_DATA);
    };

    const FORM_INVALITD = !INPUTS.amount.isValid || !INPUTS.date.isValid || !INPUTS.description.isValid;


    return (
        <View style={STYLES.formContainer}>
            <Text style={STYLES.title}>지출내역 추가 하기</Text>
            <View style={STYLES.inputRow}>
                <Input 
                label="가격"
                style={STYLES.rowInput}
                invalid={!INPUTS.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: INPUTS.amount.value,
                    
                }}
                />
                <Input 
                label="날짜"
                style={STYLES.rowInput} 
                invalid={!INPUTS.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: INPUTS.date.value,
                }}
                />
            </View>
            <Input 
            label="설명" 
            invalid={!INPUTS.description.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: INPUTS.description.value,
            }}
            />
            {FORM_INVALITD && (
            <Text style={STYLES.errorText}>
                입력되지 않은 정보가 있습니다. 확인 해주세요.
            </Text>
            )}
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
    },
    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8,
    },
})