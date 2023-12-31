import { Dimensions, Image, ScrollView, StyleSheet, View, useWindowDimensions } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";
import { Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";


function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {

    const {width, height} = useWindowDimensions();
    let imageSize = 300;

    if(width < 380) {   
        imageSize = 150;
    };
    if(height < 400) {
        imageSize = 80;
    };

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={styles.screen}>
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image 
                    source={require('../assets/images/success.png')}
                    style={styles.image}
                />
            </View>
                <Text style={styles.summaryText}>
                    컴퓨터는 
                    <Text style={styles.highlight}>
                        {roundNumber}
                    </Text>번의 라운드만에 숫자 
                    <Text style={styles.highlight}>
                        {userNumber}
                    </Text>를 맞췄습니다.
                </Text>
            <PrimaryButton onPress={onStartNewGame}>새게임</PrimaryButton>
        </View>
        </ScrollView>
    )
};

export default GameOverScreen;

// const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: deviceWidth < 380 ? 150 : 300,
        // height: deviceWidth < 380 ? 150 : 300,
        // borderRadius: deviceWidth < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-bold',
        color: Colors.primary500,
    },
    screen: {
        flex: 1,
    },
});