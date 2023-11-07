import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import CartegoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetails from './screens/MealDetails';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'
import FavoritesContextProvider from './store/context/favorites-context';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator 
      useLegacyImplementation={true}
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: '#ccc',
        contentStyle: { backgroundColor: '#3f2f25' },
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#c4baa1'
      }}
    >
      <Drawer.Screen name="카테고리" component={CartegoriesScreen} options={{
        title: '전체목록',
        drawerIcon: ({color, size}) => (
          <Ionicons name="list" color={color} size={size}/>
        ),
      }}/>
      <Drawer.Screen name="즐겨찾기" component={FavoritesScreen}
        options={{
          drawerIcon: ({color, size}) => (
            <Ionicons name="star" color={color} size={size}/>
          ),
        }}
      />
    </Drawer.Navigator>
  )
};

//bare

export default function App() {
  return (
    <>
      <StatusBar 
        style='dark'
      />
      <Provider store={store}>
      {/* <FavoritesContextProvider> */}
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
              title: '전체목록',
              headerShown: false
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
      {/* </FavoritesContextProvider> */}
      </Provider>
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
