import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/color';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameOver, setGameOver] = useState(true);

  function pickedNumberHandler(pickedNumb){
    setUserNumber(pickedNumb);
    setGameOver(false);
  };
  
  function gameOverHandler() {
    setGameOver(true);
  };

  let screen = <GameStartScreen onPickNumb={pickedNumberHandler}/>;

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  };

  if(gameOver && userNumber) {
    screen = <GameOverScreen />
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
