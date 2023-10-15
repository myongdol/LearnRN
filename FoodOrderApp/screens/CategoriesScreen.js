import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle';


function CartegoriesScreen({navigation}) {
    function renderItem(itemData) {
        function pressHanlder() {
            navigation.navigate('음식 목록');
        };
    
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHanlder}
            />
        )
    };
    return (
        <FlatList 
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          numColumns={2}
        />
    )
};
export default CartegoriesScreen;