import { Keyboard, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapSearchComponent from '@components/Map/MapSearchComponent';
import { Region } from 'types/map/types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapBottomSheet from '@components/Map/MapBottomSheet';
import { defaultPlace, delta } from 'utils/map/defaultData';
import DefaultMarker from '@assets/images/map/marker.svg';
import PointMarker from '@assets/images/map/pointMarker.svg';
import { requestPermission } from 'hooks/locationRequestPermission';
type Props = NativeStackScreenProps<StackParamList, 'MapSearchScreen'>;

// 임시 데이터
const markersData = [
  { latitude: 37.511007, longitude: 127.0940034 },
  { latitude: 37.51181740000001, longitude: 127.0942317 },
  { latitude: 37.5115088, longitude: 127.0936038 },
  { latitude: 37.5113961, longitude: 127.0939363 },
];

const MapSearchScreens = ({ navigation }: Props) => {
  const [region, setRegion] = useState<Region | null>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  // marker 기능
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(-1);

  const handleMarkerPress = (index: number) => {
    setSelectedMarkerIndex(index);
  };

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
        >
          {markersData.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              onPress={() => handleMarkerPress(index)}
            >
              {selectedMarkerIndex === index ? (
                <PointMarker style={styles.marker} />
              ) : (
                <DefaultMarker style={styles.marker} />
              )}
            </Marker>
          ))}
        </MapView>

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
  marker: {
    width: 40,
    height: 54,
  },
});
