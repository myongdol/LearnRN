import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';
import { GlobalStyles } from './constants/styles';
import { Ionicons } from '@expo/vector-icons';


const STACK = createNativeStackNavigator();
const BOTTOM_TAB = createBottomTabNavigator();

function ExpensesOverview() {
  return (
  <BOTTOM_TAB.Navigator 
  screenOptions={{
    headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    headerTintColor: 'white',
    tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
    tabBarActiveTintColor: GlobalStyles.colors.accent500,
  }}>
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
        <STACK.Navigator>
          <STACK.Screen name="전체지출" component={ExpensesOverview} />
          <STACK.Screen name="비용관리" component={ManageExpense} />
        </STACK.Navigator>
      </NavigationContainer>
    </>
  );
}
