import { StyleSheet, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";


const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: '후드티',
        amount: 500,
        date: new Date('2023-10-21')
    },
    {
        id: 'e2',
        description: '반팔티',
        amount: 800,
        date: new Date('2023-11-22')
    },
    {
        id: 'e3',
        description: '버블티',
        amount: 300.2,
        date: new Date('2022-10-21')
    },
    {
        id: 'e4',
        description: '프론트엔드 강의',
        amount: 1200,
        date: new Date('2023-12-21')
    },
    {
        id: 'e5',
        description: '취업하고싶다',
        amount: 2100,
        date: new Date('2023-12-09')
    },
]


function ExpensesOutput({ expenses, expensesPeriod }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary 
                expenses={DUMMY_EXPENSES}
                periodName={expensesPeriod}
            />
            <ExpensesList 
                expenses={DUMMY_EXPENSES}
            />
        </View>
    )
};

export default ExpensesOutput;

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    }
})