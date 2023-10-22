import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './components/UI/IconButton';


const STACK = createNativeStackNavigator();
const BOTTOM_TAB = createBottomTabNavigator();

function ExpensesOverview() {
  return (
  <BOTTOM_TAB.Navigator 
  screenOptions={({navigation}) => ({
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
    headerRight: ({tintColor}) => (
      <IconButton icon="add" size={32} color={tintColor} onPress={() => {
        navigation.navigate('비용관리');
      }}/>
    ),

  })}
  >
    <BOTTOM_TAB.Screen 
      name="지출 내용"
      component={RecentExpenses}
      options={{
        title: '지출 내용',
        tabBarLabel: '최근',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="hourglass" size={size} color={color} />
        ),
      }}
    />
    <BOTTOM_TAB.Screen 
      name="전체 지출"
      component={AllExpenses} 
      options={{
        title: '전체 지출',
        tabBarLabel: '전체 보기',
        tabBarIcon: ({color, size}) => (
          <Ionicons name="calendar" size={size} color={color} />
        ),
      }}
    />
  </BOTTOM_TAB.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <STACK.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: GlobalStyles.colors.primary500},
            headerTintColor: 'white'
          }}
        >
          <STACK.Screen 
            name="전체지출"
            component={ExpensesOverview}
            options={{headerShown: false}}
          />
          <STACK.Screen 
            name="비용관리"
            component={ManageExpense}
            options={{
              presentation: 'modal',  // only  ios
            }}
          />
        </STACK.Navigator>
      </NavigationContainer>
    </>
  );
}
