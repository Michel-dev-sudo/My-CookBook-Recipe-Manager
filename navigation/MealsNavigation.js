import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from "react-navigation-drawer"
import CategoryMealScreen from '../screens/CategoryMealScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Color';
import {Platform} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {Text} from 'react-native';


const defaultNavOptions = { //mode:'modal',
    //initialRouteName: 'MealDetail',
    headerStyle:{
        backgroundColor:Platform.OS === 'ios' ? Colors.accentColor: '' 
        },
        headerTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerBackTitleStyle:{
            fontFamily:'open-sans-bold'
        },
        headerTintColor:Platform.OS === 'android' ? Colors.primaryColor : ''} 

const MealsNavigation = createStackNavigator({
    
    Categories:{
        screen:CategoriesScreen,
        navigationOptions:{
            headerTitle:'Meal Categories'
        }
    },
    CategoryMeals: {
        screen:CategoryMealScreen
    },
    MealDetail:MealDetailScreen,
    Favorites:FavoritesScreen,
    },
    {
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor:Platform.OS === 'ios' ? Colors.accentColor: '' 
                },
                headerTintColor:Platform.OS === 'android' ? Colors.primaryColor : ''
        }
    });

    

    const FavNavigator = createStackNavigator({
        Favorites:FavoritesScreen,
        MealDetail:MealDetailScreen
    },{
        defaultNavigationOptions:defaultNavOptions
    }); 
    
    const tabScreenConfig ={
        
            Meals:{screen:MealsNavigation,
                navigationOptions:{
                    tabBarIcon:tabInfo=>{
                        return <Ionicons 
                            name="ios-restaurant" 
                            size={25} 
                            color={tabInfo.tintColor} 
                        />
                    },
                    tabBarColor:Colors.primaryColor,
                    tabBarLabel:Platform.OS === 'android'?<Text style={{fontFamily:'open-sans'}}>Meals!</Text>:'Meals',
                    
                    
                }
            },
            Favorites:{screen:FavNavigator,
                navigationOptions:{
                    tabBarLabel:'Favorites!',
                    tabBarIcon:tabInfo =>{
                        return(
                            <Ionicons 
                                name="ios-star" 
                                size={25} 
                            // color={tabInfo.tintColor}  
                            color='#fcfcfc'  
                            />
                        );
                    },
                //tabBarColor:Colors.accentColor,
              
                
            }},
        }
    
    const MealsFavTabNavigator = Platform.OS === 'android' ? 
    createMaterialBottomTabNavigator(tabScreenConfig,{
        activeTintColor:'white',
        shifting:true
    })
    : createBottomTabNavigator(
        tabScreenConfig,{
            tabBarOptions:{
                activeTintColor:Colors.accentColor ,
                labelStyle:{
                    fontFamily:'open-sans'
                 }
        }
    });
    const FiltersNavigator = createStackNavigator({
        Filters:FiltersScreen
    },{
        navigationOptions:{
            drawerLabel:'Filters!!!'
        },
        defaultNavigationOptions:defaultNavOptions
    });
    const MainNavigator = createDrawerNavigator({
        MealsFav:{screen:MealsFavTabNavigator,navigationOptions:{
            drawerLabel:'Meals!!'
        }
    },
        Filters:FiltersNavigator
    },{
        contentOptions:{
            activeTintColor:Colors.accentColor,
            labelStyle:{
                fontFamily:'open-sans-bold'
            }
        }
    });
export default createAppContainer(MainNavigator);
