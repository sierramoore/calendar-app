import React from 'react';

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Animated,
  Button,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import styled from 'styled-components';

import { colors } from './global/colors';
import { CalendarPage } from './components/pages/calendar';
import { Index } from './components/pages/Index';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_800ExtraBold,
  Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


export type RootStackParamList = {
  Calendar: undefined;
};



export default function App() {
  const Stack = createStackNavigator<RootStackParamList>();

  const [fontsLoaded] = useFonts({
      Montserrat_400Regular: Montserrat_400Regular,
      Montserrat_500Medium: Montserrat_500Medium,
      Montserrat_600SemiBold: Montserrat_600SemiBold,
      Montserrat_700Bold: Montserrat_700Bold,
      Montserrat_800ExtraBold: Montserrat_800ExtraBold,
      Montserrat_900Black: Montserrat_900Black,
  });

  function NavStack() {
    return (
      <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: "horizontal"
      }}>
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calendar"
          component={CalendarPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    )
  }
  if (!fontsLoaded) {
    return (
      <NavigationContainer>
      </NavigationContainer>
    )
  }
  return (
    // <Provider>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    // </Provider>
  );
}

