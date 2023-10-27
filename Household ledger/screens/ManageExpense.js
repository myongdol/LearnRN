import { useContext, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { EXPENSES_CONTEXT } from "../store/expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOVerlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";


function ManageExpense({route, navigation}) {
    const EDITED_EXPENSE_ID = route.params?.expenseId;
    const IS_EDITING = !!EDITED_EXPENSE_ID;
    const [ERROR, setERROR] = useState();

    const EXPENSE_CTX = useContext(EXPENSES_CONTEXT);

    const [IS_SUBMIT, setIS_SUBMIT] = useState(false);

    const SELECT_EXPENSE = EXPENSE_CTX.expenses.find(
        (expense) => expense.id === EDITED_EXPENSE_ID
        );

    useLayoutEffect(() => {
        navigation.setOptions({
            title: IS_EDITING ? '수정 하기' : '추가 하기'
        });
    }, [navigation, IS_EDITING]);

    async function deleteHandler() {
        setIS_SUBMIT(true);
        try {
            await deleteExpense(EDITED_EXPENSE_ID);
            navigation.goBack();
            EXPENSE_CTX.deleteExpense(EDITED_EXPENSE_ID);
        } catch (ERROR) {
            setERROR('삭제할 수 없습니다 다음에 다시 시도하세요.');
            setIS_SUBMIT(false);
        }
    };
    
    function cancelHandler() {
        navigation.goBack();
    };

    async function confirmHandler(expenseData) {
        setIS_SUBMIT(true);
        try {
            if (IS_EDITING) {
                EXPENSE_CTX.updateExpense(
                    EDITED_EXPENSE_ID, expenseData
                );
                await updateExpense(EDITED_EXPENSE_ID, expenseData);
            } else {
                const ID = await storeExpense(expenseData);
                EXPENSE_CTX.addExpense({...expenseData, id: ID});
            } 
            navigation.goBack();
        } catch (ERROR) {
            setERROR('데이터를 저장할 수 없습니다. 다음에 다시 시도해주세요.');
            setIS_SUBMIT(false);
        }
    };

    if (ERROR && !IS_SUBMIT) {
        return <ErrorOverlay message={ERROR}/>
    };

    if (IS_SUBMIT) {
        return <LoadingOverlay />
    };


    return (
        <View style={STYLES.container}>
            <ExpenseForm 
                submitButtonLabel={IS_EDITING ? "변경" : "확인"}
                onCancel={cancelHandler} 
                onSubmit={confirmHandler}
                defalutValue={SELECT_EXPENSE}
            />
            {IS_EDITING && (
                <View style={STYLES.deleteContainer}>
                    <IconButton
                        icon="trash"
                        color={GlobalStyles.colors.error500}
                        size={36} 
                        onPress={deleteHandler} 
                    />
                </View>
            )}
        </View>
    )
};

export default ManageExpense;

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800,
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center',
        
    },
})