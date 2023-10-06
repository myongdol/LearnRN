import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

function GameStartScreen() {
    return (
        <View>
            <TextInput />
            <PrimaryButton>초기화</PrimaryButton>
            <PrimaryButton>확인</PrimaryButton>
        </View>
    )
};

export default GameStartScreen;