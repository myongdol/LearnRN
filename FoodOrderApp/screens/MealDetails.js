import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import {MEALS} from '../data/dummy-data'
import MealInfo from '../components/MealInfo';

function MealDetails({ route }) {

    const mealId = route.params.mealId;
    if (!route) return <Text>음식 정보가 없습니다.</Text>;

    const selectedMeal = MEALS.find((meal)=> meal.id === mealId);

    return (
        <>
            <View>
                <Image source={{uri: selectedMeal.imageUrl}}/>
                <Text>
                    {selectedMeal.title}
                </Text>
                <MealInfo 
                    duration={selectedMeal.duration}
                    complexity={selectedMeal.complexity}
                    affordability={selectedMeal.affordability}
                />
                <View>
                    <Text>재료</Text>
                    {selectedMeal.ingredients.map(ingredient => (
                    <Text key={ingredient}>{ingredient}</Text>
                    ))}
                    <Text>요리순서</Text>
                    {selectedMeal.steps.map(step => (
                    <Text key={step}>{step}</Text>
                    ))}
                    <Text>요리난이도</Text>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({

});

export default MealDetails;
