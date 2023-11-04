import PlaceForm from "../components/Places/PlaceForm";


function AddPlace({navigation}) {
    function createPlaceHandler(place) {
        navigation.navigate('모든장소', {
            place: place
        });
    };
    
    return (
        <PlaceForm onCreatePlace={createPlaceHandler} />
    )
};

export default AddPlace;