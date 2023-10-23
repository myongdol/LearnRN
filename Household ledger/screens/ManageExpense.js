import { useLayoutEffect } from "react";
import { StyleSheet, View } from "react-native";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/UI/Button";


function ManageExpense({route, navigation}) {
    const EDITED_EXPENSE_ID = route.params?.expenseId;
    const IS_EDITING = !!EDITED_EXPENSE_ID;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: IS_EDITING ? '수정 하기' : '추가 하기'
        });
    }, [navigation, IS_EDITING]);

    function deleteHandler() {
        navigation.goBack();
    };
    
    function cancelHandler() {
        navigation.goBack();
    };

    function confirmHandler() {
        navigation.goBack();
    };

    return (
        <View style={STYLES.container}>
            <View style={STYLES.buttons}>
                <Button onPress={confirmHandler} style={STYLES.button}>
                    {IS_EDITING ? '확인' : '추가'}
                </Button>
                <Button mode='flat' onPress={cancelHandler} style={STYLES.button}>
                    취소
                </Button>
            </View>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    button: {
        minWidth: 120,
        marginHorizontal: 8,
    }
})