import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteScreens, StackParamList } from 'types/routes/types';
import Onboarding from '@screens/Onboarding';
import RegisterRoute from './RegisterRoute';
import LoginScreen from '@screens/LoginScreen';
import CustomScreen from '@screens/CustomScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const MainRoute = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name={RouteScreens.OnboardingScreen}
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteScreens.RegisterRoute}
          component={RegisterRoute}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteScreens.LoginScreen}
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteScreens.CustomScreen}
          component={CustomScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
