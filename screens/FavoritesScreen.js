import React from 'react';

import MealList  from '../components/MealList';
import {useSelector} from 'react-redux'
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import {View,StyleSheet} from 'react-native'; 
import DefaultText from '../components/DefaultText';


const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    //const favMeals = availableMeals.filter(meals=>meals.id === 'm1' || meals.id === 'm2')
    if(favMeals.length == 0 || !favMeals){
        return<View style={styles.content}>
            <DefaultText>No Favorites meal found.Start adding some!</DefaultText>
        </View>
    }

    return (
        <MealList 
            listData={favMeals} //thiss shows all the fav list on the screen
            navigation={props.navigation}
        />
    );
    
    
};

FavoritesScreen.navigationOptions = navData => {
    return {
       headerTitle : 'Your Favorites',
       headerLeft:(
           <HeaderButtons HeaderButtonComponent={HeaderButton}>
               <Item 
                    title ="Menu" 
                    iconName="ios-menu" 
                    onPress={()=>{navData.navigation.toggleDrawer();
                    }
                    } />
           </HeaderButtons>
       )
    } 
 
}; 
const styles = StyleSheet.create({
    content:{
        //marginTop:30,
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }
});
export default FavoritesScreen;