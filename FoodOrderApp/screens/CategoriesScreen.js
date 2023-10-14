import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTitle from '../components/CategoryGridTitle';

function renderItem(itemData) {
    return (
        <CategoryGridTitle
            title={itemData.item.title}
            color={itemData.item.color}
        />
    )
};

function CartegoriesScreen() {
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