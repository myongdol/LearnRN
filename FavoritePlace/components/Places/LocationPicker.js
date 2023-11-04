import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useEffect, useState } from "react";
import { getAddress, getMapPreview } from "../../Util/location";
import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native';



function LocationPicker({onPickLocation}) {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();
    const route = useRoute();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused && route.params) {
            const mapPickedLocation = {
                lat: route.params.pickedLat, 
                lng:  route.params.pickedLng,
            };
            setPickedLocation(mapPickedLocation);
        };
    }, [route, isFocused]);

    useEffect(() => {
        async function handleLocation() {
            if (pickedLocation) {
                const address = await getAddress(pickedLocation.lat, pickedLocation.lng);
                onPickLocation({...pickedLocation, address: address});
            };
        };
        handleLocation();
    }, [pickedLocation, onPickLocation])


    async function verifyPermissions() {
        if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        };

        if (locationPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('권한이 없습니다.', '권한요청 팝업이 뜨면 허용해주세요.');

            return false;
        };
        
        return true;
    };

    async function getLocationHander() {
        const hasPermission = await verifyPermissions();
        
        if(!hasPermission) {
            return;
        }

        const location = await getCurrentPositionAsync();
        setPickedLocation({
            lat: location.coords.latitude,
            lng: location.coords.longitude
        });
    };

    function pickOnMapHandler() {
        navigation.navigate('Map');
    };

    let locationPreview = <Text>위치정보가 아직 없습니다.</Text>
    if (pickedLocation) {
        locationPreview = (
            <Image
                style={STYLES.mapImage} 
                source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}
            />
        )
    }

    return (
        <View>
            <View style={STYLES.mapPreview}>
                {locationPreview}
            </View>
            <View style={STYLES.actions}>
                <OutlineButton 
                    icon="location"
                    onPress={getLocationHander}
                >
                    GPS로 찾기
                </OutlineButton>
                <OutlineButton 
                    icon="map"
                    onPress={pickOnMapHandler}
                >
                    지도에서 찾기
                </OutlineButton>
            </View>
        </View>
    )
};

export default LocationPicker;



const STYLES = StyleSheet.create({
    mapPreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    mapImage: {
        width: '100%',
        height: '100%'
    },
});