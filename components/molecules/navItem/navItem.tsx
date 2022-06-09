import React, { FC } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
  } from "react-native";
import styled from 'styled-components/native';
import { colors } from '../../../global/colors';
import { Typography } from '../../atoms/typography';
import { Icon } from '../../atoms/icon';
import { ToDoBtn } from '../../atoms/button'

export interface NavItemProps {
    icon: string; // name, color, background-color
    text: string;
}

export const NavItem:FC<NavItemProps> = (props) => {
    return (
        <ItemContainer>
            <ToDoBtn/>
            <Typography type="H3">{props.text}</Typography>
        </ItemContainer>
    );
}

const ItemContainer = styled(View)`
    height: 100%;
    width: 50%;
    background-color: ${colors.light};
    display: flex;
    flex-direction: row;
`;

const IconBg = styled(TouchableOpacity)`
    height: 60px;
    width: 60px;
    background-color: ${colors.blue};
    border-top-right-radius: 10px;
    border-top-left-radius: 10px
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px; 
`