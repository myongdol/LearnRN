import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { Alert } from "react-native";
import Colors from "../constants/color";
import Title from "../components/ui/Title";
import { Text } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function GameStartScreen({onPickNumb}) {
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
        
        onPickNumb(chosenNumber);
    };

    return (
        <View  style={styles.rootContainer}>
            <Title>번호 맞추기</Title>
        <Card>
            <InstructionText>컴퓨터가 맞춰야 하는 번호를 입력 해주세요.</InstructionText>
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
        </Card>
        </View>
    )
};

export default GameStartScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
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