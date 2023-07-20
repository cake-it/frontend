import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
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
}: MapSearchComponentProps) => {
  // 검색한 위치로 이동
  const handleMoveToLocation = async () => {
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

      setRegion(newRegion);
      setSearchText('');
      Keyboard.dismiss();
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
        placeholder="딸기 케이크 맛집을 검색해보세요"
        placeholderTextColor="#b3b3b3"
      />
      {/* API 연결하면서 터치 범위 수정해보기 */}
      <TouchableWithoutFeedback
        disabled={!searchText}
        onPress={handleMoveToLocation}
        hitSlop={{ top: 70, bottom: 20, left: 20, right: 20 }}
      >
        <Search style={{ position: 'absolute', right: 35 }} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default MapSearchComponent;

const styles = StyleSheet.create({
  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    alignItems: 'center',
  },
  searchInput: {
    marginVertical: 60,
    backgroundColor: theme.white,
    paddingHorizontal: 20,
    width: '95%',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
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
});
