import { StyleSheet, View } from "react-native";
import OutlineButton from "../UI/OutlineButton";
import { Colors } from "../../constants/colors";



function LocationPicker() {

    function getLocationHander() {

    };

    function pickOnMapHandler() {

    };

    return (
        <View>
            <View style={STYELS.mapPreview}></View>
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
    }
});