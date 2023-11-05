import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import { Colors } from "../constants/colors";
import { useEffect } from "react";



export function PlaceDetails({route}) {
    function showOnMapHandler() {

    };

    const selectedPlaceId = route.params.placeId;

    useEffect(() => {

    }, [selectedPlaceId]);


    return (
    <ScrollView>
        <Image style={STYLES.image} />
        <View style={STYLES.locationContainer}>
            <View style={STYLES.addressContainer}>
                <Text style={STYLES.address}>주소</Text>
            </View>
            <OutlineButton
                icon="map"
                onPress={showOnMapHandler}
            >
                지도 보기
            </OutlineButton>
        </View>
    </ScrollView>
    );
};

const STYLES = StyleSheet.create({
    screen: {
        alignItems: 'center'
    },
    image: {
        height: '35%',
        minHeight: 300,
        width: '100%',
    },
    locationContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    addressContainer: {
        padding:  20,
    },
    address: {
        color: Colors.primary500,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    }
});