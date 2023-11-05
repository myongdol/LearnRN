import { insertPlace } from "../Util/database";
import PlaceForm from "../components/Places/PlaceForm";


function AddPlace({navigation}) {
    async function createPlaceHandler(place) {
        try {
            const result = await insertPlace(place);
            console.log('Place 생성:', result);
            navigation.navigate('모든장소');
        } catch (error) {
            console.error('Error 생성 실패:', error);
        };
    };
    
    return (
        <PlaceForm onCreatePlace={createPlaceHandler} />
    )
};

export default AddPlace;