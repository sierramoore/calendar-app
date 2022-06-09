import React, { FC } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
  } from "react-native";
import styled from 'styled-components';
import { colors } from '../../../global/colors';
import { HamburgerMenu } from '../../molecules/headerExpandBtn/hamburgerMenu';
import { Typography } from '../../atoms/typography'
import { NavItem } from '../../molecules/navItem';
import { RootStackParamList } from '../../../App';

type Props = {
    isShowing: boolean,
    hide: () => void,
    style: React.style
}
export const Modal:FC<Props> = (props) => {
    if(!props.isShowing) return null; 
    return (
        <Container style={props.style}>
            <TouchableOpacity onPress={props.hide}>
                <Text>X</Text>
            </TouchableOpacity>

            {props.children}
        </Container>
    );
}

const Container = styled(View)`
    height: 100%;
    width: 85%;
    background-color: ${colors.lightBackground};
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 12%;
`;