import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterScreens, StackParamList } from 'types/routes/types';
import IdScreen from '@screens/registerScreens/IdScreen';
import PasswordScreen from '@screens/registerScreens/PasswordScreen';
import PasswordConfirmScreen from '@screens/registerScreens/PasswordConfirmScreen';
import BirthGenderScreen from '@screens/registerScreens/BirthGenderScreen';
import ProfileScreen from '@screens/registerScreens/ProfileScreen';
import CheckScreen from '@screens/registerScreens/CheckScreen';
import WelcomeScreen from '@screens/registerScreens/WelcomeScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const RegisterRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={RegisterScreens.IdScreen}
        component={IdScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.PasswordScreen}
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.PasswordConfirmScreen}
        component={PasswordConfirmScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.BirthGenderScreen}
        component={BirthGenderScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.CheckScreen}
        component={CheckScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.ProfileScreen}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={RegisterScreens.WelcomeScreen}
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RegisterRoute;
