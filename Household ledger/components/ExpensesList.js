import { FlatList, Text } from "react-native";

function renderItem(itemData) {
    return (
        <Text>{itemData.item.description}</Text>
    )
};

function ExpensesList({ expenses }) {
    return (
        <FlatList 
            data={expenses}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
    )
};

export default ExpensesList;
