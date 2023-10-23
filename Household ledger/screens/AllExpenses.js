import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSES_CONTEXT } from "../store/expenses-context";


function AllExpenses () {
    const EXPENSE_CONTEXT = useContext(EXPENSES_CONTEXT);

    return (
        <ExpensesOutput 
            expensesPeriod="total"
            expenses={EXPENSE_CONTEXT.expenses}
            fallbackText="입력된 지출항목이 없습니다."
        />
    )
};

export default AllExpenses;