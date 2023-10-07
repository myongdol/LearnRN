import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({children, onPress}) {

    
    return (
        <View style={styles.buttonOuterContainer}>
        <Pressable 
          onPress={onPress}
          android_ripple={{color: '#640233'}}
          style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
        >
            <Text style={styles.buttonText}>
                {children}
            </Text>
        </Pressable>
        </View>
    )
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2, // 안드로이드 전용 속성
    },
    buttonOuterContainer: {
        borderRadius: 32,
        margin: 4,
        overflow: 'hidden'
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    pressed: {  // iOS 스타일링
        opacity: 0.75,
    }
});