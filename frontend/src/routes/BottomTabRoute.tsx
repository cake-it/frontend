import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomScreens, BottomTabList } from 'types/routes/bottomTabTypes';
import MapSearchScreens from '@screens/MapSearchScreens';
import CurationScreen from '@screens/CurationScreen';
import CustomScreen from '@screens/CustomScreen';
import { theme } from 'styles/theme';
import OffCustom from '@assets/images/bottomTab/offCustom.svg';
import OnCustom from '@assets/images/bottomTab/onCustom.svg';
import OffCuration from '@assets/images/bottomTab/offCuration.svg';
import OnCuration from '@assets/images/bottomTab/onCuration.svg';
import OffMap from '@assets/images/bottomTab/offMap.svg';
import OnMap from '@assets/images/bottomTab/onMap.svg';
import { Platform } from 'react-native';

const BottomTab = createBottomTabNavigator<BottomTabList>();

const BottomTabRoute = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={BottomScreens.BottomMapSearchScreen}
      screenOptions={{
        headerShown: false,
        unmountOnBlur: true,
        tabBarActiveTintColor: theme.pink,
        tabBarInactiveTintColor: '#767676',
        tabBarLabelStyle: {
          fontSize: 10,
          fontFamily: theme.bold,
          marginBottom: Platform.OS === 'android' ? 17 : 0,
          bottom: 2,
        },
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
        },
      }}
    >
      <BottomTab.Screen
        name={BottomScreens.BottomMapSearchScreen}
        component={MapSearchScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <OnMap /> : <OffMap />),
          tabBarLabel: '지도',
        })}
      />
      {/* <BottomTab.Screen
        name={BottomScreens.BottomReservationScreen}
        component={ReservationScreen}
      /> */}
      <BottomTab.Screen
        name={BottomScreens.BottomCurationScreen}
        component={CurationScreen}
        options={() => ({
          tabBarIcon: ({ focused }) =>
            focused ? <OnCuration /> : <OffCuration />,
          tabBarLabel: '큐레이션',
        })}
      />
      <BottomTab.Screen
        name={BottomScreens.BottomCustomScreen}
        component={CustomScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <OnCustom /> : <OffCustom />),
          tabBarLabel: '커스텀',
        })}
      />
      {/* <BottomTab.Screen
        name={BottomScreens.BottomMyPageScreen}
        component={MyPageScreen}
        options={() => ({
          tabBarLabel: '마이페이지',
        })}
      /> */}
    </BottomTab.Navigator>
  );
};

export default BottomTabRoute;
