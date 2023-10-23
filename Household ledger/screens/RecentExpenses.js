import { useContext } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSES_CONTEXT } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";


function RecentExpenses() {
    const EXPENSE_CONTEXT = useContext(EXPENSES_CONTEXT);

    const RECENT_EXPENSES = EXPENSE_CONTEXT.expenses.filter((expense) => {
        const TODAY = new Date();
        const DATE_7DAYS_AGO = getDateMinusDays(TODAY, 7);

        return (expense.date >= DATE_7DAYS_AGO) && (expense.date <= TODAY);
    });

    return (
        <ExpensesOutput 
            expensesPeriod="최근 7일"
            expenses={RECENT_EXPENSES}
            fallbackText="지난 7일간 지출한 내역이 없습니다."
        />
    )
};

export default RecentExpenses;