import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AllPlaces from './screens/AllPlaces';
import AddPlace from './screens/AddPlace';
import IconButton from './components/UI/IconButton';
import { Colors } from './constants/colors';
import Map from './screens/Map';
import { useEffect, useState } from 'react';
import AppLoading from 'expo-app-loading';
import { init } from './Util/database';
import { PlaceDetails } from './screens/PlaceDetails';


const STACK = createNativeStackNavigator();

export default function App() {
  const [dbInit, setDbInit] = useState(false);

  useEffect(() => {
    init().then(() => {
      setDbInit(true);
    }).catch((err) => {
      console.log(err);
    });
  },[]);

  if (!dbInit) {
    return <AppLoading />;
  }


  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <STACK.Navigator screenOptions={{
          headerStyle: {backgroundColor: Colors.primary500},
          headerTintColor: Colors.gray700,
          contentStyle: {backgroundColor: Colors.gray700}
        }}>
          <STACK.Screen 
            name="모든장소" 
            component={AllPlaces} 
            options={({navigation}) => ({
              title: '즐겨찾기',
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
          <STACK.Screen name="장소추가" component={AddPlace} options={{
            title: '장소를 추가하세요.',
          }} />
          <STACK.Screen name="Map" component={Map} />
          <STACK.Screen name="상세보기" component={PlaceDetails} />
        </STACK.Navigator>
      </NavigationContainer>
    </>
  );
}

