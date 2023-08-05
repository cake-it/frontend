import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { theme } from 'styles/theme';
import FullInfoComponent from './FullInfoComponent';
import MiddleInfoComponent from './MiddleInfoComponent';
import { BottomSheetProps } from 'types/map/types';

// 20  - 50 - 100 height
const { height } = Dimensions.get('window');
const bottomSheetMinHeight = height * 0.2;
const bottomSheetPeekHeight =
  Platform.OS === 'ios' ? height * 0.46 : height * 0.51;

const MapBottomSheet = ({ isFocused, navigation }: BottomSheetProps) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const [isFullScreen, setIsFullScreen] = useState(false);

  const indicatorStyle = {
    backgroundColor: isFullScreen ? theme.white : '#D9D9D9',
    width: 60,
  };

  // snapPoint changes
  const handleSheetChange = useCallback((index: number) => {
    // console.log('handleSheetChange', index);
    index === 2 ? setIsFullScreen(true) : setIsFullScreen(false);
  }, []);

  // props로 내려줄 함수
  const handleSnapPress = useCallback((index: number) => {
    bottomSheetRef.current?.snapToIndex(index);
  }, []);

  // 검색창에 focus 되면 bottomSheet 내려주기
  useEffect(() => {
    if (isFocused) bottomSheetRef.current?.snapToIndex(0);
  }, [isFocused]);

  // 예약 페이지 이동
  const handleReservation = () => {
    navigation.navigate('ReservationScreen');
  };

  return (
    <BottomSheet
      handleIndicatorStyle={indicatorStyle}
      ref={bottomSheetRef}
      index={0}
      snapPoints={[bottomSheetMinHeight, bottomSheetPeekHeight, height]}
      style={styles.shadowContainer}
      onChange={handleSheetChange}
    >
      {/* 풀스크린으로 올렸을 때 */}
      {isFullScreen ? (
        <FullInfoComponent
          navigation={handleReservation}
          onPress={() => handleSnapPress(1)}
        />
      ) : (
        // 50% 이하
        <MiddleInfoComponent onPress={handleReservation} />
      )}
    </BottomSheet>
  );
};

export default MapBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    marginLeft: 13,
    backgroundColor: theme.white,
  },
  indicatorStyle: {
    backgroundColor: '#D9D9D9',
    width: 60,
  },
  shadowContainer: {
    backgroundColor: 'transparent',
    shadowColor: '#b4b4b4',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 10,
  },
});
