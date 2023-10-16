import React from 'react';
import { Text, StyleSheet } from 'react-native';

function MealDetails({ route }) {

    const mealId = route.params.mealId;

    if (!route) return <Text>음식 정보가 없습니다.</Text>;

    return (
        <>
        <Text>{mealId}</Text>
        </>
    );
}

const styles = StyleSheet.create({

});

export default MealDetails;
