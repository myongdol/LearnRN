import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";


function Button({children, onPress, mode, style}) {
    return ( 
        <View style={style}>
            <Pressable 
                onPress={onPress}
                style={({pressed}) => pressed && STYLES.pressed}
            >
                <View style={[STYLES.button, mode === 'flat' && STYLES.flat]}>
                    <Text style={[STYLES.buttonText, mode === 'flat' && STYLES.flatText]}>
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    )
};

export default Button;

const STYLES = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary500,
    },
    flat: {
        backgroundColor: 'transparent',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    flatText: {
        color: GlobalStyles.colors.primary200,
    },
    pressed: {
        opacity: 0.75,
        backgroundColor: GlobalStyles.colors.primary100,
        borderRadius: 4,
    },
});