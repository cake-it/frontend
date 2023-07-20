import React from 'react';
import {
  DefaultTheme,
  NavigationContainer,
  Route,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteScreens, StackParamList } from 'types/routes/types';
import Onboarding from '@screens/Onboarding';
import RegisterRoute from './RegisterRoute';
import LoginScreen from '@screens/LoginScreen';
import CustomScreen from '@screens/CustomScreen';
import MapRoute from './MapRoute';

const Stack = createNativeStackNavigator<StackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

const MainRoute = () => {
  // 커스텀 페이지일 경우, 좌우가 아닌 상하로 navigation
  const shouldHideHeader = (route: Route<string, object | undefined>) => {
    return route.name === RouteScreens.CustomScreen;
  };
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={({ route }) => ({
          gestureDirection: shouldHideHeader(route) ? 'vertical' : 'horizontal',
        })}
      >
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
        <Stack.Screen
          name={RouteScreens.MapRoute}
          component={MapRoute}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
