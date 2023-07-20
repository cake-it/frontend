import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MapScreens, StackParamList } from 'types/routes/types';
import MapSearchScreens from '@screens/MapScreens/MapSearchScreens';
import ShopInfoScreen from '@screens/MapScreens/ShopInfoScreen';

const Stack = createNativeStackNavigator<StackParamList>();

const MapRoute = () => {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        gestureDirection: 'vertical',
      })}
    >
      <Stack.Screen
        name={MapScreens.MapSearchScreen}
        component={MapSearchScreens}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={MapScreens.ShopInfoScreen}
        component={ShopInfoScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MapRoute;
