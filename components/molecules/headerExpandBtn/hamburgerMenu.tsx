import React, {FC} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { HeaderOptionProps } from ".";
import {colors} from '../../../global/colors'
import { Text, View } from 'react-native';
import { Col } from "../../../global/styles";

const HamburgerMenuStyle = styled(TouchableOpacity)`
    background-color: ${colors.green};
    color: #fff;
    padding: 8px 10px;
    margin-right: auto;
    height: 98%;
    width: 80px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 60px;
    border-bottom-left-radius: 17px; 
`;

export const HamburgerMenu: FC<HeaderOptionProps> = (props) => {
    return (
        <HamburgerMenuStyle {...props}>
            <LineCol>
                <Line style={{top: 5}}> __ </Line>
                <Line style={{top: 15}}> ___ </Line>
                <Line style={{top: 25}}> __ </Line>
            </LineCol>
            {props.children}
        </HamburgerMenuStyle>
    )
}
const LineCol = styled(View)`
    display: flex;
    flex-direction: column;
    max-height: 50px;
    position: relative;
`;
const Line = styled(Text)`
    color: ${colors.light}
    font-size: 30px;
    position: absolute;
`;
