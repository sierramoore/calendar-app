import React, {FC} from "react";
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { HeaderOptionProps } from ".";
import {colors} from '../../../global/colors'
import { Text } from 'react-native';

const AddEventStyle = styled(TouchableOpacity)`
    background-color: ${colors.orange};
    color: #fff;
    padding: 8px 10px;
    margin-left: auto;
    height: 98%;
    width: 80px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 17px;
`;

export const AddEvent: FC<HeaderOptionProps> = (props) => {
    return (
        <AddEventStyle {...props}>
             <Add> + </Add>
            {props.children}
        </AddEventStyle>
    );
}

const Add = styled(Text)`
    color: ${colors.light}
    font-size: 30px;
    position: absolute;
    top: 38%;
    left: 50%;
`;
