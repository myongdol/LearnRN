import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../components/UI/OutlineButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";



export function PlaceDetails({route, navigation}) {
    const [fetchPlace, setFetchPlace] = useState();

    function showOnMapHandler() {
        navigation.navigate('Map', {
            initialLat: fetchPlace.location.lat,
            initialLng: fetchPlace.location.lng,
        });
    };

    const selectedPlaceId = route.params.placeId;

    useEffect(() => {
        async function loadPlaceData() {
           const place = await fetchedPlaceDetails(selectedPlaceId);
           setFetchPlace(place);
           navigation.setOptions({
            title: place.title,
           });
        }
        loadPlaceData();
    }, [selectedPlaceId]);

    if(!fetchPlace) {
        return (
            <View style={STYLES.fallback}>
                <Text>데이터 불러오는중...</Text>
            </View>
        )
    }

    return (
    <ScrollView>
        <Image style={STYLES.image} source={{uri: fetchPlace.imageUri}}/>
        <View style={STYLES.locationContainer}>
            <View style={STYLES.addressContainer}>
                <Text style={STYLES.address}>{fetchedPlace.location.address}</Text>
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
    },
    fallback: {
        flex: 1,
        justifyContent: 'center'
    }
});