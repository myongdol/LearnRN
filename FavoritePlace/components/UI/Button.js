import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../constants/colors";



function Button({onPress, children}) {
    return (
        <Pressable 
            style={({pressed}) => [STYELS.button, pressed && STYELS.pressed]} 
            onPress={onPress}>
            <Text>
                {children}
            </Text>
        </Pressable>
    )

};

export default Button;

const STYELS = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        margin: 4,
        backgroundColor: Colors.primary800,
        elevation: 2,
        shadowOpacity: 0.15,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        borderRadius: 4,
    },
    pressed: {
        opacity: 0.8
    },
    text: {
        textAlign: 'center',
        fontSize: 16,
        color: Colors.primary50
    }
})