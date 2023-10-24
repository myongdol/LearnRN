import { View } from "react-native";
import Input from './Input'


function ExpenseForm() {
    function amountChangeHandler() {

    };


    return (
        <View>
            <Input label="가격" textInputConfig={{
                keyboardType: 'decimal-pad',
                onChangeText: amountChangeHandler,
            }}
            />
            <Input label="날짜" textInputConfig={{
                placeholder: 'YYYY-MM-DD',
                maxLength: 10,
                onChangeText: () => {}
            }}
            />
            <Input label="설명" textInputConfig={{
                multiline: true,
                autuCapitalize: 'none',
                autoCoreect: false,
            }}/>
        </View>
    )
};

export default ExpenseForm;