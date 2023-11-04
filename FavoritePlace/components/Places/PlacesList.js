import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from "../../constants/colors";


function PlacesList({places}) {

    if(!places || places.length === 0) {
        return (
            <View style={STYLES.fallbackContainer}>
                <Text style={STYLES.fallbackText}>추가된 장소가 없습니다.</Text>
            </View>
        )
    }

    return (
        <FlatList 
        style={STYLES.list}
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <PlaceItem place={item}/>} 
        />
    );
};

export default PlacesList;

const STYLES = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fallbackText: {
        fontSize: 16,
        color: Colors.primary200,
    },
    list: {
        margin: 24,
    }
});