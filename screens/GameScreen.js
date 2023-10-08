import { StyleSheet } from "react-native";
import { Text, View } from "react-native";


function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>예상 번호</Text>
            
            <View>
                <Text>높거나 작거나</Text>
                
            </View>
            {/* <View>현재 라운드</View> */}
        </View>
    )
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,

    },
});