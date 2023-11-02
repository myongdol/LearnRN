import { useState } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from'react-native-maps';


function Map() {
    const [selectedLocation, setSelectedLocation] = useState();

    const region = {
        latitude: 37.78,
        longitude: -122.43,
        lititudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    function selectLocationHandler(event) {
        const lat = event.nativeEvent.coordinate.latitude;
        const lng = event.nativeEvent.coordinate.longitude;

        setSelectedLocation({lat: lat, lng: lng});
    }

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