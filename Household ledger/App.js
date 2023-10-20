import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import ManageExpense from './screens/ManageExpense';
import RecentExpenses from './screens/RecentExpenses';
import AllExpenses from './screens/AllExpenses';


const STACK = createNativeStackNavigator();
const BOTTOM_TAB = createBottomTabNavigator();

function ExpensesOverview() {
  return (
  <BOTTOM_TAB.Navigator>
    <BOTTOM_TAB.Screen name="지출내용" component={RecentExpenses} />
    <BOTTOM_TAB.Screen name="전체비용" component={AllExpenses} />
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
