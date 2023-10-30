import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';


const STACK = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <STACK.Navigator>
          <STACK.Screen name="모든장소" component={AllPlaces} />
          <STACK.Screen name="장소추가" component={AddPlace} />
        </STACK.Navigator>
      </NavigationContainer>
    </>
  );
}

