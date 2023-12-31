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
import OnReservation from '@assets/images/bottomTab/onReservation.svg';
import OffReservation from '@assets/images/bottomTab/offReservation.svg';
import OffMyPage from '@assets/images/bottomTab/offMyPage.svg';
import OnMyPage from '@assets/images/bottomTab/onMyPage.svg';
import { Platform } from 'react-native';
import MyPageRoute from './MyPageRoute';
import CustomText from '@components/router/CustomText';
import ReservationScreen from '@screens/ReservationScreen';

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
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 80 : 70,
          borderTopWidth: 0.8,
        },
      }}
    >
      <BottomTab.Screen
        name={BottomScreens.BottomMapSearchScreen}
        component={MapSearchScreens}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <OnMap /> : <OffMap />),
          tabBarLabel: ({ focused }) => (
            <CustomText focused={focused} label="지도" />
          ),
        })}
      />
      <BottomTab.Screen
        name={BottomScreens.BottomReservationScreen}
        component={ReservationScreen}
        options={() => ({
          tabBarIcon: ({ focused }) =>
            focused ? <OnReservation /> : <OffReservation />,
          tabBarLabel: ({ focused }) => (
            <CustomText focused={focused} label="예약" />
          ),
        })}
      />
      <BottomTab.Screen
        name={BottomScreens.BottomCurationScreen}
        component={CurationScreen}
        options={() => ({
          tabBarIcon: ({ focused }) =>
            focused ? <OnCuration /> : <OffCuration />,
          tabBarLabel: ({ focused }) => (
            <CustomText focused={focused} label="큐레이션" />
          ),
        })}
      />
      <BottomTab.Screen
        name={BottomScreens.BottomCustomScreen}
        component={CustomScreen}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <OnCustom /> : <OffCustom />),
          tabBarLabel: ({ focused }) => (
            <CustomText focused={focused} label="커스텀" />
          ),
        })}
      />
      <BottomTab.Screen
        name={BottomScreens.BottomMyPageRoute}
        component={MyPageRoute}
        options={() => ({
          tabBarIcon: ({ focused }) => (focused ? <OnMyPage /> : <OffMyPage />),
          tabBarLabel: ({ focused }) => (
            <CustomText focused={focused} label="마이페이지" />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabRoute;
