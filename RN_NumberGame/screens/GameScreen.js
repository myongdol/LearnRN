import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from "../components/game/GuessLogItem";

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


function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRound, setGuessRound] = useState([initialGuess]);

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver(guessRound.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRound(prevGuessRound => [newNumber, ...prevGuessRound]);
    };

    const guessRoundsListLength = guessRound.length;
 
    return (
        <View style={styles.screen}>
            <Title>컴퓨터의 예상번호</Title>
            <NumberContainer>
                {currentGuess}
            </NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>번호가 큰가요? 작은가요?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.BtnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                    <View style={styles.BtnContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </PrimaryButton>
                    </View>
                </View>
            </Card>
            <View style={styles.listContainer}>
                {/* {guessRound.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
                <FlatList 
                    data={guessRound}
                    renderItem={(itemData) => 
                        <GuessLogItem 
                            roundNumber={guessRoundsListLength - itemData.index}
                            guess={itemData.item}
                        />
                    }
                    keyExtractor={(item) => item}
                />
            </View>
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    BtnContainer: {
        flex: 1,
    },
    InstructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});