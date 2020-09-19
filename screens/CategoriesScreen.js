import React from 'react';
import {Text,
    View,
    StyleSheet,
    FlatList,
    TouchableOpacity,
     Platform} from 'react-native';

import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
//for drawer
import {HeaderButtons,Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';


const CategoriesScreen = props => {

    const renderGridItem = itemData =>{ 
        return(
            <CategoryGridTile 
                title = {itemData.item.title}
                color={itemData.item.color}
                onSelect={()=>{
                    props.navigation.navigate({
                        routeName:'CategoryMeals',
                        params:{
                            categoryId:itemData.item.id
                        }
                    });
                }}
            />
        );        

    };

    return (
    <View >
       <FlatList 
        data={CATEGORIES}
        renderItem={renderGridItem}
        keyExtractor={(item,index)=>item.id}
        numColumns={2} 
           
       />
    </View>
    );
};


CategoriesScreen.navigationOptions = navData => {
    return {
       headerTitle : 'Meal Categories',
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
        screen:{
           // flex:1,
            //justifyContent:'center',
            //alignItems:'center',
           // marginTop:10,
        },
       
});
export default CategoriesScreen;