import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput";
import { EXPENSES_CONTEXT } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOVerlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";


function RecentExpenses() {
    const [IS_FETCHING, setIS_FETCHING] = useState(true);
    const [ERROR, setERROR] = useState();
    const EXPENSE_CTX = useContext(EXPENSES_CONTEXT);

    useEffect(() => {
        async function getExpenses() {
          setIS_FETCHING(true);
          try {
            const EXPENSES = await fetchExpense();
            EXPENSE_CTX.setExpenses(EXPENSES);
          } catch (ERROR) {
            setERROR('지출 내역을 가져올 수 없습니다.');
          }
          setIS_FETCHING(false);
        }

        getExpenses();
    },[]);


    if(ERROR && !IS_FETCHING) {
        return <ErrorOverlay message={ERROR}/>
    }

    if (IS_FETCHING) {
        return <LoadingOverlay />
    }

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