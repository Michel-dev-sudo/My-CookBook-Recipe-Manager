import React,{useEffect,useCallback} from 'react';
import {ScrollView,Text,View,StyleSheet,Image} from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {Ionicons} from '@expo/vector-icons';
import DefaultText from '../components/DefaultText';
import {toggleFavorite} from '../store/actions/meal'

    const ListItem = props => {
        return (
        <Text style={styles.listItem}>{props.children}</Text>
        );
    }

const MealDetailScreen = props => {

    const availableMeals = useSelector(state=>state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal=>meal.id===mealId)

    //to check is that meal is favorite or not 
    
    
    
//to display meal when we press the pic to go to the meal details screens
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(mealId)); //send id to action in meal action
    }, [dispatch, mealId]);

  useEffect(() => {
    // props.navigation.setParams({ mealTitle: selectedMeal.title });
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  // also it takes time to load to display favorite ios-star after next render.
    // so we go to the meal list to provide favid as the params to the mealdetails 
    // screen
    const currentMealIsFavorite = useSelector(
        state=>state.meals.favoriteMeals.some(meal=>meal.id === mealId)
        );
    useEffect(() => {
        props.navigation.setParams({isFav:currentMealIsFavorite});
        
    }, [currentMealIsFavorite]);

    return (
        <ScrollView>
        <Image source={{uri:selectedMeal.imageUrl}}
                style={styles.image}
       />
           
            {/* <Text>{selectedMeal.title}</Text> */}
                <View style={styles.details}>
                    <DefaultText>{selectedMeal.duration} m</DefaultText>
                    <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
                    <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                </View>
                <Text style={styles.title}>Ingredients</Text>
                {selectedMeal.ingredients.map(ingredient=>(
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                ))}
                <Text style={styles.title}>Steps</Text>
                {selectedMeal.steps.map(step=>(
                    <ListItem key = {step}>{step}</ListItem>
                ))}
            
        </ScrollView>
    );

    
};


MealDetailScreen.navigationOptions = navigationData =>{
    //const mealId = navigationData.navigation.getParam('mealId');
    const mealTitle = navigationData.navigation.getParam('mealTitle')
   // const selectedMeal = MEALS.find(meal=>meal.id===mealId)

   const toggleFavorite = navigationData.navigation.getParam('toggleFav');
   const isFavorite = navigationData.navigation.getParam('isFav');
    return {
        headerTitle:mealTitle,
        headerRight:(
            <HeaderButtons HeaderButtonComponent = {HeaderButton} >
                {/* <Item 
                    title="Favorite"
                    iconName="ios-star"
                    onPress={toggleFavorite}
                /> */}
                <Item
                    title="Favorite"
                    iconName = {isFavorite ? "ios-star" : "ios-star-outline" }
                    onPress={toggleFavorite}
                />
            </HeaderButtons>
        )
    }
};

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200,
    },
    details:{
        //flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10,
    },
    title:{
        fontFamily:'open-sans-bold',
        textAlign:'center',
        fontSize:21,
    },
    listItem:{
        margin:10,
        borderWidth:2,
        borderColor:'#cccccc',
        padding:10,
    }
    
});
export default MealDetailScreen;