import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

function PlaceItem({place, onSelect}) {
    return (
        <Pressable 
          style={({pressed}) => [STYLES.item, pressed && STYLES.pressed]} 
          onPress={onSelect.bind(this, place.id)}
        >
            <Image 
                style={STYLES.image}
                source={{uri: place.imageUri}}
            />
            <View style={STYLES.info}>
                <Text style={STYLES.title}>제목{place.title}</Text>
                <Text style={STYLES.address}>주소{place.address}</Text>
            </View>
        </Pressable>
    )
};

export default PlaceItem;

const STYLES = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        borderRadius: 6,
        marginVertical: 12,
        backgroundColor: Colors.primary500,
        elevation: 2,
        shadowOpacity: 0.15,
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 2,
        shadowColor: 'black',
    },
    pressed: {
        opacity: 0.9,
    },
    image: {
        flex: 1,
        borderBottomLeftRadius: 4,
        borderTopLeftRadius: 4,
        height: 100
    },
    info: {
        flex: 2,
        padding: 12
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.gray700
    },
    address: {
        fontSize: 12,
        color: Colors.gray700
    },
});