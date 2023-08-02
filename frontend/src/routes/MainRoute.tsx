import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RouteScreens, StackParamList } from 'types/routes/types';
import Onboarding from '@screens/Onboarding';
import RegisterRoute from './RegisterRoute';
import LoginScreen from '@screens/LoginScreen';
import CustomScreen from '@screens/CustomScreen';
import CurationScreen from '@screens/CurationScreen';
import BottomTabRoute from './BottomTabRoute';
import MapSearchScreens from '@screens/MapSearchScreens';
import MyPageRoute from './MyPageRoute';

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
        <Stack.Screen
          name={RouteScreens.CurationScreen}
          component={CurationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteScreens.MapSearchScreen}
          component={MapSearchScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RouteScreens.MyPageRoute}
          component={MyPageRoute}
          options={{ headerShown: false }}
        />

        {/* 메인 bottom Tab */}
        <Stack.Screen
          name={RouteScreens.BottomTabRoute}
          component={BottomTabRoute}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRoute;
