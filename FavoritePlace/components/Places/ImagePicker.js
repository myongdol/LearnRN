import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { useState } from "react";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";


function ImagePicker({onTakeImage}) {
    const [pickedImage, setPickedImage] = useState();
    const [cameraPermissionInformation, requestPermission] = useCameraPermissions();

    async function verifyPermissions() {
        if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        };

        if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
            Alert.alert('권한이 없습니다.', '권한요청 팝업이 뜨면 허용해주세요.');

            return false;
        };
        
        return true;
    };

    async function takeImageHandler() {
        const hasPermission = await verifyPermissions();

        if(!hasPermission) {
            return;
        }

        const image = await launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9], 
        quality: 0.5,
       });

       setPickedImage(image.uri);
       onTakeImage(image.uri);
    };

    let imagePreview = <Text>촬영된 사진이 없습니다.</Text>;
    
    if(pickedImage) {
        imagePreview = <Image style={STYELS.imageStyle} source={{uri: pickedImage}} />;
    }

    return (
        <View>
            <View style={STYELS.imagePreview}>
                {imagePreview}
            </View>
            <OutlineButton icon="camera" onPress={takeImageHandler}>사진찍기</OutlineButton>
        </View>
    )
};

export default ImagePicker;

const STYELS = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4,
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    }
});