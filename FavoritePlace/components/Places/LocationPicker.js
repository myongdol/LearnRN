import { Alert, Image, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from "expo-location";
import { useState } from "react";
import { getMapPreview } from "../../Util/location";
import { useNavigation } from '@react-navigation/native';



function LocationPicker() {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    const [pickedLocation, setPickedLocation] = useState();
    const navigation = useNavigation();

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
                style={STYELS.mapImage} 
                source={{uri: getMapPreview(pickedLocation.lat, pickedLocation.lng)}}
            />
        )
    }

    return (
        <View>
            <View style={STYELS.mapPreview}>
                {locationPreview}
            </View>
            <View style={STYELS.actions}>
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



const STYELS = StyleSheet.create({
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