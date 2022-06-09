import React, { FC } from 'react';
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
import styled from 'styled-components/native';
import { colors } from '../../../global/colors';
import { Typography } from '../../atoms/typography';
import { Icons } from '../../atoms/icon/icons';

export enum NavItemType { 
    toDo = "TODO",
    event = "EVENT",
    finance = "FINANCE",
    skin = "SKIN",
    period = "PERIOD"
}

export interface NavItemProps {
    text: string;
    eventType: NavItemType;
    background: string;
    icon: string;
}

export const NavItem:FC<NavItemProps> = ({...props}) => {

    switch(props.eventType){
        case NavItemType.toDo:
            return <NavItem background={colors.orange} icon={Icons.toDo} text="To Do" />
        default:
        console.log('Please choose an event type')
        return <></>;
    }
}
