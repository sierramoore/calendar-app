import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Asset } from "expo-asset";
import Constants from "expo-constants";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import {
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity
} from "react-native";
import LottieView from 'lottie-react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../App';
import 'react-native-gesture-handler';
import GestureRecognizer from 'react-native-swipe-gestures';
import { CalendarPage } from '../calendar';
import { colors } from '../../../global/colors';

type Props = {
    navigation: StackNavigationProp<RootStackParamList, "Index">
}

export const Index: FC<Props> = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true); //for seconds delay
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 2000);
    },[])

    return (
        <Container style={{fontFamily: 'Montserrat'}}>
        {isLoading ? <LottieView
              ref={animation => {
                  animation && animation.play()
              }}
              source={require('../../../assets/loadingSplash.json')}
              style={[StyleSheet.absoluteFill, {...styles.animation}]}
            /> 
          :  <CalendarPage />
        } 
      </Container>
    )
}

const styles = StyleSheet.create({
    animation: {
        position: 'relative',
        zIndex: 2,
    }
  });
  const Container = styled.View`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: ${colors.orange};
  `;