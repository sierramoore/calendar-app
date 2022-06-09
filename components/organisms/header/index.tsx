import React, { FC, ReactNode } from 'react';
import {
    View,
  } from "react-native";
import styled from 'styled-components';
import { colors } from '../../../global/colors';
import { AddEvent } from '../../molecules/headerExpandBtn/addEvent';
import { HamburgerMenu } from '../../molecules/headerExpandBtn/hamburgerMenu';
import { Typography } from '../../atoms/typography';


interface HeaderProps {
    onPressMenu: () => React.FC,
    onPressAdd: () => React.FC
}

export const Header:FC<HeaderProps> = ({...props}) => {
    return  (
        <HeaderContainer>
            <HamburgerMenu onPress={props.onPressMenu} />
            <Typography type="H3" color={colors.secondary} margin="25px 0 0 0">CALENDAR</Typography>
            <AddEvent onPress={props.onPressAdd}/>
        </HeaderContainer>
    );
}


const HeaderContainer = styled(View)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 12%;
  width: 100%;
  top: 0;
  /* position: absolute;
  top: 0; */
`;