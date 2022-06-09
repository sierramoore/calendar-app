import React, { FC } from 'react';
import {Icons} from './icons'
import { colors } from '../../../global/colors';
import { ToDoBtn } from './toDo';

export type ButtonProps = {
    icon: Icons,
    backgroundColor: object | string,
    active?: boolean,
    color?: string,
    size?: number
}

export const Button:FC<ButtonProps> = ({...props}) => {
    switch(props.name){
        case Icons.calendar:
            return <ToDoBtn icon={Icons.toDo} backgroundColor={colors.green}/>;
        default:
            console.log('Please choose an icon')
            return <></>;
    }
}
