import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  
  if(!fontsLoaded) {
    return <AppLoading/>;
  }

  function pickedNumberHandler(pickedNumb){
    setUserNumber(pickedNumb);
    setGameOver(false);
  };
  
  function gameOverHandler(numberOfRounds) {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  function reStartGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let screen = <GameStartScreen onPickNumb={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  };

  if(gameOver && userNumber) {
    screen = 
    <GameOverScreen 
      userNumber={userNumber}
      roundNumber={guessRounds}
      onStartNewGame={reStartGameHandler}
    />
  }


  return (
    <LinearGradient 
      style={styles.mainScreen}
      colors={[Colors.primary700, Colors.accent500]}
    >
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.mainScreen}> 
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 mainScreen: {
  flex: 1,
 },
 backgroundImage: {
  opacity: 0.15
 }
});
