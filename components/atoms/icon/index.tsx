import React, { FC } from 'react';
import {Icons} from './icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { colors } from '../../../global/colors';

export type IconProps = {
    name: Icons,
    active?: boolean,
    color?: string,
    size?: number
}

export const Icon:FC<IconProps> = ({...props}) => {
    switch(props.name){
        case Icons.calendar:
            return <MaterialCommunityIcons name={Icons.calendar} size={20} alt="calendar month" />;
        case Icons.event:
            return <MaterialIcons name={Icons.event} size={20} alt="event" />;
        case Icons.finances:
            return <FontAwesome5 name={Icons.finances} size={20} alt="finances" />;
        case Icons.note:
            return <MaterialCommunityIcons name={Icons.note} size={20} alt="note" />;
        case Icons.toDo:
            return <FontAwesome5 name={Icons.toDo} size={20} alt="to do" />;
        case Icons.period:
            return <MaterialCommunityIcons name={Icons.period} size={15} alt="period" />;
        case Icons.tags:
            return <AntDesign name={Icons.tags} size={15} alt="tags" />;
        case Icons.image:
            return <AntDesign name={Icons.image} size={15} alt="image" />;
        case Icons.setting:
            return <AntDesign name={Icons.setting} size={15} alt="setting" />;
        case Icons.delete:
            return <AntDesign name={Icons.delete} size={15} alt="delete" />;
        case Icons.camera:
            return <Entypo name={Icons.camera} size={15} alt="camera" />;
        case Icons.arrowRight:
            return <MaterialIcons name={Icons.arrowRight} size={30} alt="arrow right" />;
        case Icons.arrowLeft:
            return <MaterialIcons name={Icons.arrowLeft} size={30} alt="arrow left" />;
        case Icons.cart:
            return <Ionicons name={Icons.cart} size={30} alt="arrow left" />;
        default:
            console.log('Please choose an icon')
            return <></>;
    }
}
