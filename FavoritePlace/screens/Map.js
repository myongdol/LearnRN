import { useCallback, useLayoutEffect, useState } from 'react';
import { Alert, StyleSheet } from 'react-native';
import MapView, { Marker } from'react-native-maps';
import IconButton from '../components/UI/IconButton';



function Map({navigation, route}) {
    const initialLocation = route.params && {
        lat: route.params.initialLat,
        lng: route.params.initialLng,
    }
    
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const region = {
        latitude: initialLocation ?  initialLocation.lat: 37.78,
        longitude: initialLocation ? initialLocation.lng: -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    function selectLocationHandler(event) {
        if(initialLocation) {
            return;
        }
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({lat: lat, lng: lng});
    };

    const savePickedLoaction = useCallback(() => {
        if(!selectedLocation) {
            Alert.alert('선택된 위치가 없습니다!','위치를 선택 해주세요!!');
            return;
        };
        
        navigation.navigate('장소추가', {
            pickedLat: selectedLocation.lat,
            pickedLng: selectedLocation.lng,
        });
    }, [navigation, selectedLocation]);

    useLayoutEffect(() => {
        if (initialLocation) {
            return;
        }
        navigation.setOptions({
            headerRight: ({tintColor}) => (
            <IconButton 
                icon="save"
                size={24} 
                color={tintColor} 
                onPress={savePickedLoaction} 
            />
            )
        });
    }, [navigation, savePickedLoaction, initialLocation]);

    return (
        <MapView
            initialRegion={region}
            style={STYELS.map}
            onPress={selectLocationHandler}
        >
            {selectedLocation && (<Marker 
            title='선택한 위치'
            coordinate={{
                latitude: selectedLocation.lat,
                longitude: selectedLocation.lng
            }} 
            />)}
        </MapView>
    )
};

export default Map;


const STYELS = StyleSheet.create({
    map: {
        flex: 1,
    }
});