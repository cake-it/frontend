import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingScreen from '@screens/myPageScreens/SettingScreen';
import { MyPageScreens, StackParamList } from 'types/routes/types';
import MyPageScreen from '@screens/myPageScreens/MyPageScreen';
import LikeListScreen from '@screens/myPageScreens/LikeListScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const MyPageRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={MyPageScreens.MyPageScreen}
        component={MyPageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MyPageScreens.SettingScreen}
        component={SettingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MyPageScreens.LikeListScreen}
        component={LikeListScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MyPageRoute;
