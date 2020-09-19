import React from 'react';
import {HeaderButton} from 'react-navigation-header-buttons';
import {Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Color';
import { Platform } from 'react-native';

const CustomHeaderButton = props =>{
    return (
        <HeaderButton 
         {...props}
         IconComponent={Ionicons}
         iconSize={23}
         color={Platform.Os ==='android' ? '#e2e6':Colors.accentColor}


    />
    );
}


export default CustomHeaderButton;