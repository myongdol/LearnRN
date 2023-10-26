import { useContext, useEffect } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSES_CONTEXT } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";


function RecentExpenses() {
    const EXPENSE_CTX = useContext(EXPENSES_CONTEXT);

    useEffect(() => {
        async function getExpenses() {
          const EXPENSES = await fetchExpense();
          EXPENSE_CTX.setExpenses(EXPENSES);
        }

        getExpenses();
    },[]);

    const RECENT_EXPENSES = EXPENSE_CTX.expenses.filter((expense) => {
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