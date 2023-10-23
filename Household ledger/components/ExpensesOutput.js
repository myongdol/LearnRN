import { StyleSheet, Text, View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../constants/styles";


function ExpensesOutput({ expenses, expensesPeriod, fallbackText }) {
    let content = <Text style={STYLES.infoText}>{fallbackText}</Text>;

    if(expenses.length > 0) {
        content = <ExpensesList expenses={expenses}/>
    }

    return (
        <View style={STYLES.container}>
            <ExpensesSummary 
                expenses={expenses}
                periodName={expensesPeriod}
            />
            {content}
        </View>
    )
};

export default ExpensesOutput;

const STYLES = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: 0,
        backgroundColor: GlobalStyles.colors.primary700,
        flex: 1,
    },
    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32,
    }
})