import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function PlaceItem({place, onSelect}) {
    return (
        <Pressable onPress={onSelect}>
            <Image 
                source={{uri: place.imageUri}}
            />
            <View>
                <Text>제목{place.title}</Text>
                <Text>주소{place.address}</Text>
            </View>
        </Pressable>
    )
};

export default PlaceItem;

const styels = StyleSheet.create({
    
});