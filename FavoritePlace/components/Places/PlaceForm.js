import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Colors } from "../../constants/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "../UI/Button";


function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [pickedLocation, setPickedLocation] = useState();

    function changeTitleHandler(enteredText) {
        setEnteredTitle(enteredText)
    };

    function savePlaceHandler() {
        
    };

    function takeImageHandler(imageUri) {
        setSelectedImage(imageUri);
    };

    const pickLocationHandler = useCallback((location) => {
        setPickedLocation(location);
    },[]);

    return (
        <ScrollView style={STYLES.form}> 
             <View>
                <Text style={STYLES.label}>제목</Text>
                <TextInput 
                    style={STYLES.input}
                    onChange={changeTitleHandler}
                    value={enteredTitle}
                />
             </View>
             <ImagePicker onTakeImage={takeImageHandler} />
             <LocationPicker onTakeLocation={pickLocationHandler}/>
             <Button onPress={savePlaceHandler}>장소추가하기</Button>
        </ScrollView>
    )
};

export default PlaceForm;

const STYLES = StyleSheet.create({
    form: {
        flex: 1,
        padding: 24,
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 4,
        color: Colors.primary500,
    },
    input: {
        marginVertical: 8,
        paddingHorizontal: 4,
        paddingVertical: 8,
        fontSize: 16,
        borderBottomColor: Colors.primary700,
        borderBottomWidth: 2,
        backgroundColor: Colors.primary100,
    }
});