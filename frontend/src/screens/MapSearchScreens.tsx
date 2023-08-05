import { Keyboard, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import MapSearchComponent from '@components/Map/MapSearchComponent';
import { Position, Region } from 'types/map/types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MapBottomSheet from '@components/Map/MapBottomSheet';
import { defaultPlace, delta } from 'utils/map/defaultData';
import DefaultMarker from '@assets/images/map/marker.svg';
import PointMarker from '@assets/images/map/pointMarker.svg';
import { requestPermission } from 'hooks/locationRequestPermission';
import LocationButton from '@components/Map/LocationButton';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'MapSearchScreen'>;

// 마커 임시 데이터
const markersData = [
  { latitude: 37.511007, longitude: 127.0940034 },
  { latitude: 37.511817, longitude: 127.0942317 },
  { latitude: 37.5115088, longitude: 127.0936038 },
  { latitude: 37.5113961, longitude: 127.0939363 },
];

const MapSearchScreens = ({ navigation }: Props) => {
  const mapView = useRef<any>(null);
  const [region, setRegion] = useState<Region | null>(null);
  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(-1);
  const [isFocused, setIsFocused] = useState(false);
  const [markerPressed, setMarkerPressed] = useState(false);
  const [searchText, setSearchText] = useState('');
  const currentPositionRef = useRef({
    latitude: region?.latitude || 0,
    longitude: region?.longitude || 0,
  });

  // 현재(본인) 위치 업데이트 함수
  const updateCurrentPosition = (latitude: number, longitude: number) => {
    currentPositionRef.current.latitude = latitude;
    currentPositionRef.current.longitude = longitude;
  };

  const getCameraProperty = (position: Position) => ({
    center: {
      latitude: position.latitude,
      longitude: position.longitude,
    },
    zoom: 18,
  });

  // 본인 위치로 지도 이동
  const moveToCurrentPosition = () => {
    if (mapView.current) {
      mapView.current.animateCamera(
        getCameraProperty(currentPositionRef.current)
      );
    }
  };

  // marker 기능
  const handleMarkerPress = (index: number) => {
    if (selectedMarkerIndex === index) {
      // 이미 선택된 마커를 다시 누르면 선택 해제
      setSelectedMarkerIndex(-1);
      setMarkerPressed(false);
    } else {
      // 새로운 마커를 선택하면 index 업데이트
      setSelectedMarkerIndex(index);
      setMarkerPressed(true);

      // 선택된 마커의 위치 정보를 가져와서 지도의 리전을 업데이트
      const selectedMarker = markersData[index];
      const offsetLatitude = 0.0005; // 조정할 위도 값 (임의로 0.001로 설정)
      const newRegion = {
        latitude: selectedMarker.latitude - offsetLatitude,
        longitude: selectedMarker.longitude,
        latitudeDelta: delta,
        longitudeDelta: delta,
      };
      setRegion(newRegion);
    }
  };

  // 최초 로딩시 권한 요청 + 성공시 유저 위치 렌더링
  useEffect(() => {
    requestPermission().then((result) => {
      if (result === 'granted') {
        handleGetGeoLocation();
      }
    });
  }, []);

  // 본인 위치 불러오기
  const handleGetGeoLocation = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        const newRegion = {
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
          latitudeDelta: delta,
          longitudeDelta: delta,
        };
        setRegion(newRegion);
        updateCurrentPosition(pos.coords.latitude, pos.coords.longitude);
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
  };

  return (
    <View style={styles.container}>
      <GestureHandlerRootView style={styles.container}>
        {/* Map */}
        <MapView
          ref={mapView}
          onPress={Keyboard.dismiss}
          initialRegion={defaultPlace}
          region={region || undefined}
          style={styles.container}
          zoomTapEnabled={false}
          provider={PROVIDER_GOOGLE}
        >
          {markersData.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              onPress={() => handleMarkerPress(index)}
            >
              {selectedMarkerIndex === index ? (
                <PointMarker />
              ) : (
                <DefaultMarker />
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

        {/* 위치 이동 */}
        <LocationButton
          onPress={moveToCurrentPosition}
          markerPressed={markerPressed}
        />

        {/* BottomSheet */}
        <MapBottomSheet
          setMarkerPressed={setMarkerPressed}
          setSelectedMarkerIndex={setSelectedMarkerIndex}
          markerPressed={markerPressed}
          isFocused={isFocused}
          navigation={navigation}
        />
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
