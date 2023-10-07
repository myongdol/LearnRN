import { StyleSheet, ImageBackground } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
      style={styles.mainScreen}
      colors={['#4e0329', '#ddb52f']}
    >
      <ImageBackground 
        source={require('./assets/images/background.png')}
        resizeMode='cover'
        style={styles.mainScreen}
        imageStyle={styles.backgroundImage}
      >
        <GameStartScreen />
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
