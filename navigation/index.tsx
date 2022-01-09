/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import NeverEverScreen from '../screens/NeverEverScreen';
import PointingScreen from '../screens/PointingGameScreen';

const Stack = createNativeStackNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
      <NavigationContainer  theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={WelcomeScreen} options={{ title: 'Start', headerShown: false }} />
        <Stack.Screen name="NeverEver" component={NeverEverScreen} options={{ title: 'Jag har aldrig' }} />
        <Stack.Screen name="Pointing" component={PointingScreen} options={{ title: 'Pekleken' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
