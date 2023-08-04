import {
  Keyboard,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Search from '@assets/images/map/search.svg';
import { theme } from 'styles/theme';
import { GOOGLE_PLACE_API_KEY } from 'react-native-dotenv';
import { MapSearchComponentProps } from 'types/map/types';

const MapSearchComponent = ({
  searchText,
  setSearchText,
  setRegion,
  delta,
  setIsFocused,
}: MapSearchComponentProps) => {
  // 검색한 위치로 이동
  const handleMoveToLocation = async () => {
    // 검색어 초기화
    setSearchText('');

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${GOOGLE_PLACE_API_KEY}&input=${encodeURIComponent(
          searchText
        )}&inputtype=textquery&fields=geometry`
      );
      const data = await response.json();
      const location = data.candidates[0].geometry.location;
      const newRegion = {
        latitude: location.lat, // 위도
        longitude: location.lng, // 경도
        latitudeDelta: delta,
        longitudeDelta: delta,
      };
      Keyboard.dismiss();
      setRegion(newRegion);
    } catch (error) {
      console.error('Error searching for location:', error);
    }
  };

  return (
    <View style={styles.searchView}>
      <TextInput
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="딸기 케이크 맛집을 검색해보세요"
        placeholderTextColor="#b3b3b3"
      />

      <TouchableOpacity
        hitSlop={styles.hit}
        activeOpacity={1.0}
        disabled={!searchText}
        onPress={handleMoveToLocation}
        style={styles.icon}
      >
        <Search />
      </TouchableOpacity>
    </View>
  );
};

export default MapSearchComponent;

// 검색창 높이 OS 사이즈 분기처리
const searchTop = Platform.OS === 'ios' ? 60 : 40;
const bottom = Platform.OS === 'ios' ? 12 : 17;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
  },
  searchInput: {
    marginTop: searchTop,
    backgroundColor: theme.white,
    paddingHorizontal: 20,
    width: '95%',
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: theme.regular,
    color: '#AAAAAA',
    shadowColor: '#535353',
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.2,
    elevation: 10,
  },
  icon: {
    position: 'absolute',
    bottom: bottom,
    right: 28,
  },
  hit: {
    top: 10,
    bottom: 10,
    left: 10,
    right: 10,
  },
});
