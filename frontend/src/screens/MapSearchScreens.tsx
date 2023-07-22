import {
  Keyboard,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapSearchComponent from '@components/Map/MapSearchComponent';
import { Region } from 'types/map/types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapBottomSheet from '@components/Map/MapBottomSheet';
import { defaultPlace, delta } from 'utils/map/defaultData';
type Props = NativeStackScreenProps<StackParamList, 'MapSearchScreen'>;

// 권한 받아오기
async function requestPermission() {
  try {
    if (Platform.OS === 'ios') {
      return await Geolocation.requestAuthorization('always');
    }
    if (Platform.OS === 'android') {
      return await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
    }
  } catch (e) {
    console.log(e);
  }
}

const MapSearchScreens = ({ navigation }: Props) => {
  const [region, setRegion] = useState<Region | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  // 최초 로딩시 권한 요청 + 성공시 유저 위치 렌더링
  useEffect(() => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        Geolocation.getCurrentPosition(
          (pos) => {
            const newRegion = {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              latitudeDelta: delta,
              longitudeDelta: delta,
            };
            setRegion(newRegion);
            setRegion;
          },
          (error) => {
            console.log(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 3600,
            maximumAge: 3600,
          }
        );
      }
    });
  }, []);

  // console.log('검색한 위치 정보: ', region);

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        {/* Map */}
        <MapView
          onPress={Keyboard.dismiss} // 일단 지도 클릭하면 dismiss 설정 구현 방향에 따라 수정 가능성 O
          initialRegion={defaultPlace}
          region={region || undefined}
          style={styles.container}
          provider={PROVIDER_GOOGLE}
        />

        {/* Search */}
        <MapSearchComponent
          setIsFocused={setIsFocused}
          searchText={searchText}
          setSearchText={setSearchText}
          setRegion={setRegion}
          delta={delta}
        />

        {/* BottomSheet */}
        <MapBottomSheet isFocused={isFocused} />
      </GestureHandlerRootView>
    </View>
  );
};

export default MapSearchScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
