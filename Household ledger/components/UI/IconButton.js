import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"


//커스텀 버튼 컴포넌트
function IconButton({icon, size, color, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && STYLES.pressed}>
            <View style={STYLES.buttonContainer}>
                <Ionicons 
                    name={icon}
                    soze={size}
                    color={color}
                />
            </View>
        </Pressable>
    )
};

export default IconButton;

const STYLES = StyleSheet.create({
    buttonContainer: {
        borderRadius: 24,
        padding: 6,
        marginVertical: 2,
        marginHorizontal: 8
    },
    pressed: {
        opacity: 0.75
    }
})