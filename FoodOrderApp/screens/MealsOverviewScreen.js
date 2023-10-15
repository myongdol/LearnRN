import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";


function MealsOverviewScreen({ route}) {
    const catId = route.params.categoryId; // useRoute훅을 사용해도 괜찬음. 


    return (
        <View style={styles.container}>
            <Text>음식 목록 - {catId}</Text>
        </View>
    )
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    }
});