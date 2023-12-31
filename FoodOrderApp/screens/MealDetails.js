import React, { useContext, useLayoutEffect } from 'react';
import { Text, StyleSheet, View, Image, ScrollView, Button } from 'react-native';
import {MEALS} from '../data/dummy-data'
import MealInfo from '../components/MealInfo';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favorites';
// import { FavoritesContext } from '../store/context/favorites-context';

function MealDetails({ route, navigation }) {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    if (!route) return <Text>음식 정보가 없습니다.</Text>;

    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);

    const mealIsFavorite = favoriteMealIds.includes(mealId);

    function favoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({id:mealId}));
        } else {
            // favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({id:mealId}));
        }
    };
    
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                <IconButton
                  icon={mealIsFavorite ? 'star' : 'star-outline'}
                  color='white'
                  onPress={favoriteStatusHandler}
                />
                )
            }
        })
    }, [navigation, favoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <View>
                <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>
                    {selectedMeal.title}
                </Text>
                <MealInfo 
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                    textStyle={styles.detailText}
                />
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>
                            재료
                        </Subtitle>
                        <List data={selectedMeal.ingredients}/>
                        <Subtitle>
                            순서
                        </Subtitle>
                        <List data={selectedMeal.steps}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


export default MealDetails;


const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 300,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});
