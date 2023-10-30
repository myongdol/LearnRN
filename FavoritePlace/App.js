import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';


const STACK = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <STACK.Navigator>
          <STACK.Screen 
            name="모든장소" 
            component={AllPlaces} 
            options={({navigation}) => ({
              headerRight: ({tintColor}) => (
              <IconButton 
                color={tintColor}
                size={24}
                icon="add"
                onPress={() => navigation.navigate('장소추가') }
              />
              )
          })}
          />
          <STACK.Screen name="장소추가" component={AddPlace} />
        </STACK.Navigator>
      </NavigationContainer>
    </>
  );
}

