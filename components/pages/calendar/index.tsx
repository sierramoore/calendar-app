import React, {FC, useEffect, useRef} from 'react';
import {
    Animated,
    Text,
    View,
  } from "react-native";
import styled from 'styled-components/';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import { colors } from '../../../global/colors';
import { Header } from "../../organisms/header";
import { Icon } from '../../atoms/icon';
import {Icons} from '../../atoms/icon/icons';
import { useModal } from '../../hooks/useModal';
import { Modal } from "../../organisms/modal";
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "CalendarPage">
}

export const CalendarPage:FC<Props> = ({navigation}) => {
    const [isShowingEventForm, toggleEventForm] = useModal();
    const [isShowingSidebar, toggleSidebar] = useModal();    

    return (
        <Wrapper>
            <Header 
                onPressMenu={toggleEventForm} 
                onPressAdd={toggleSidebar}
            />

           
            <Calendar
                style={{height: '70%'}}
                theme={{
                    backgroundColor:'',
                    calendarBackground:`${colors.lightBackground}`,
                    textSectionTitleColor: '#b6c1cd',
                    textSectionTitleDisabledColor: '#d9e1e8',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    todayTextColor: '#00adf5',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: `${colors.secondary}`,
                    disabledArrowColor: '#d9e1e8',
                    monthTextColor: `${colors.primary}`,
                    indicatorColor: 'red',
                    textDayFontFamily: 'Montserrat',
                    textMonthFontFamily: 'Montserrat',
                    textDayHeaderFontFamily: 'Montserrat',
                    textDayFontWeight: '300',
                    textMonthFontWeight: 'bold',
                    textDayHeaderFontWeight: '300',
                    textDayFontSize: 16,
                    textMonthFontSize: 24,
                    textDayHeaderFontSize: 16
                  }}
                  renderArrow={direction => <Icon name={direction === 'right' ? Icons.arrowRight : Icons.arrowLeft} color={colors.secondary} />}
            />

            
            <Modal isShowing={isShowingEventForm} hide={toggleEventForm} style={{left: 0}}>
                <Text>Menu</Text> 
            </Modal>

            <Modal isShowing={isShowingSidebar} hide={toggleSidebar} style={{right: 0}}>
                <Text>Add Event</Text>
            </Modal>
        </Wrapper>
    );
}

const Wrapper = styled(View)`
    height: 100%;
`