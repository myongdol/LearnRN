import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/colors';


function OutlineButton({onPress, icon, children}) {
    return (
        <Pressable 
            onPress={onPress}
            style={({pressed}) => [STYELS.button, pressed && STYELS.pressed]}
        >
            <Ionicons 
                name={icon}
                size={18}
                color={Colors.primary500}
                style={STYELS.icon}
            />
            <Text style={STYELS.text}>{children}</Text>
        </Pressable>
    )
};

export default OutlineButton;

const STYELS = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        margin: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: Colors.primary500
    },
    pressed: {
        opacity: 0.7
    },
    icon: {
        marginRight: 6
    },
    text: {
       color: Colors.primary500
    },
});