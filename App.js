import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GameStartScreen from './screens/GameStartScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient 
      style={styles.mainScreen}
      colors={['#4e0329', '#ddb52f']}
    >
      <GameStartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
 mainScreen: {
  flex: 1,
 }
});
