import React, { FC } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
  } from "react-native";
import styled from 'styled-components/native';
import {Icons} from './icons'
import { colors } from '../../../global/colors';

export const ToDoBtn:FC = () => {

    return (
        <Bg>
            <Icon name={Icons.toDo}/>
        </Bg>
    )
}

const Bg = styled(TouchableOpacity)`
    height: 60px;
    width: 60px;
    background-color: ${colors.blue};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
`