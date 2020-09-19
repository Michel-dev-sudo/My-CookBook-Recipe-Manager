import React from 'react';
import {Text,View ,StyleSheet,TouchableOpacity,ImageBackground} from 'react-native';
import DefaultText from './DefaultText';

const MealItem = props => {
    return(
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                
                <View style={{marginHorizontal:10}}>
                    <View style={{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground 
                            style={styles.bgImage}
                            source={{uri:props.image}}  
                        >
                            <View style={styles.titleContainer}>
                                <Text style={styles.text} numberOfLines={1}>
                                {props.title}
                                </Text>
                                 
                            </View>
                        
                        </ImageBackground>
                        
                        
                    </View>
                    <View style={{...styles.mealRow,...styles.mealDetail}}>
                        <DefaultText>{props.duration} m</DefaultText>
                        <DefaultText>{props.affordability.toUpperCase()}</DefaultText>
                        <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    mealItem:{
        height:250, //we have given 100% width to flatList
        width:'100%',
        backgroundColor:'#f5f5f5',
        marginTop:6,
        borderRadius:10,
        overflow:'hidden',
        
    },
    mealRow:{
        flexDirection:'row',
    },
    mealHeader:{
        height:'85%'
    },
    mealDetail:{
        //flexDirection:'row',
        paddingHorizontal:10,
        justifyContent:'space-around',
        alignItems:'center', 
        height:'15%'
    },
    bgImage:{
        width:'100%',
        height:'100%',
        justifyContent:'flex-end',
    },
    text:{
        fontFamily:'open-sans-bold',
        fontSize:20,
        color:'white',
        textAlign:'center',
    },
    titleContainer:{
        backgroundColor:'rgba(0,0,0,0.2)',
        paddingVertical:5,
        paddingHorizontal:10,
    },
});

export default MealItem;