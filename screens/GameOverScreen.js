import { Image, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import { Text } from "react-native";


function GameOverScreen() {
    return (
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer}>
                <Image 
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
            <View>
                <Text>
                    당신은 X번의 라운드만에 숫자 Y를 맞췄습니다.
                </Text>
            </View>
        </View>
    )
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});