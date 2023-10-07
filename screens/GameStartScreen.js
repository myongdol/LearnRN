import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { Alert } from "react-native";

function GameStartScreen() {
    const [enteredNumber, setEnteredNumber] = useState('');

    function inputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };
    
    function inputResetHandler() {
        setEnteredNumber('');
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('유효하지 않은 숫자입니다.',
            '숫자는 1부터 99사이의 값이어야 합니다.',
             [{
                text: '확인',
                style: 'destructive',
                onPress: inputResetHandler
            }]
            );
            return;
        }
        console.log('값입력')
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.numberInput} 
                maxLength={2} 
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={inputHandler}
                value={enteredNumber}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>확인</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={inputResetHandler}>초기화</PrimaryButton>
                </View>
            </View>
        </View>
    )
};

export default GameStartScreen;

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 12,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1,
    }
});