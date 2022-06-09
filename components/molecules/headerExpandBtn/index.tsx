import React, { FC } from 'react';
import { AddEvent } from './addEvent';
import { HamburgerMenu } from './hamburgerMenu';

export enum HeaderOptionType { event = "EVENT", menu = "MENU"}

interface HeaderOption {
    type: HeaderOptionType
}

export interface HeaderOptionProps {
    onPress: () => void;
    align?: string;
}

export const HeaderExpandBtn:FC<HeaderOptionProps & HeaderOption> = (props) => {
    switch(props.type){
        case HeaderOptionType.event:
            return <AddEvent {...props}/>
        case HeaderOptionType.menu:
            return <HamburgerMenu {...props}/>
        default:
            console.log('Please choose a button')
            return <></>
    }
}