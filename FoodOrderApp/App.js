import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CartegoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="카테고리" component={CartegoriesScreen}/>
      <Drawer.Screen name="즐겨찾기" component={FavoritesScreen}/>
    </Drawer.Navigator>
  )
};


export default function App() {
  return (
    <>
      <StatusBar 
        style='dark'
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: '#ccc',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}
        >
          <Stack.Screen 
            name="Drawer"
            component={DrawerNavigator}
            options={{
              title: '전체 목록',
            }}
          />
          <Stack.Screen 
            name="음식 목록"
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name="음식 정보"
            component={MealDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
