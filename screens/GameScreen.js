import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";


function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    function nextGuessHandler(direction) {  // direction = 'lower' or 'greater'
        if(
            (direction === 'lower' && currentGuess < userNumber) ||
            (direction === 'greater' && currentGuess > userNumber)
        ) {
            Alert.alert('거짓말을 하고 계십니다.', '당신은 이게 틀렸다는 것을 알고 있습니다.', [{text: '미안!', style: 'cancel'}]);
            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newNumber);
    };
 
    return (
        <View style={styles.screen}>
            <Title>예상번호</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <View>
                <Text>높거나 작거나</Text>
                <View style={styles.PMBtn}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                </View>
            </View>
            {/* <View>현재 라운드</View> */}
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    },
    PMBtn: {
        display: 'flex',
        justifyContent: 'center',
    }
});