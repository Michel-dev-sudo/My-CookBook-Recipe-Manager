import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import MealItem from './MealItem';
import {useSelector } from 'react-redux';

const MealList = props =>{

    const favMeals = useSelector(state=>state.meals.favoriteMeals);

    const renderMealItem = (itemData) =>{
        const isFavorite = favMeals.some(meal=>meal.id === itemData.item.id);
        return (
       <MealItem 
           title={itemData.item.title}
           onSelectMeal = {()=>{
               props.navigation.navigate({
                   routeName:'MealDetail',
                   params:{
                       mealId:itemData.item.id,
                       mealTitle: itemData.item.title,
                       isFav:isFavorite //to load the data when favorite is done
                   }
               })
           }}
           duration={itemData.item.duration}
           complexity={itemData.item.complexity}
           affordability = {itemData.item.affordability}
           image={itemData.item.imageUrl}
       />
       )
    };
    return(
        <View style={styles.list}>
            <FlatList 
                    data={props.listData}
                    keyExtractor={(item)=>item.id}
                    // renderItem={({item})=>{
                    //     return <Text>{item.title}</Text>
                    // }}
                    renderItem={renderMealItem}
                    style={{width:'100%'}} //thi cause the flatList to take the 100% width on the screen
                />    
            </View>
    );
}
const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        
    }
});

export default MealList;