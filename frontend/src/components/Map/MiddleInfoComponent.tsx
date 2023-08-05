import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useCallback } from 'react';
import { theme } from 'styles/theme';
import Heart from '@assets/images/common/heart.svg';
import { StarRating } from 'utils/map/StartCount';
import OnboardingButton from '@components/Common/OnboardingButton';
import { ScrollView } from 'react-native-gesture-handler';

// 50% 이하의 bottomSheet 일 때
const MiddleInfoComponent = ({ onPress }: { onPress: () => void }) => {
  // 임시 데이터 (추후 백엔드에서 받아옴)
  // 해당 코드 추후 받는 데이터에 따라서 코드 클린하게 수정하기
  const data = [
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
  ];

  const renderItem = useCallback(
    (item: any, index: any) => (
      <View key={index} style={styles.itemContainer}>
        <Image source={item} style={styles.image} />
      </View>
    ),
    []
  );

  return (
    <View style={{ flex: 4 }}>
      <View style={styles.container}>
        <ScrollView
          horizontal
          style={{ marginBottom: 10 }}
          showsHorizontalScrollIndicator={false}
        >
          {data.map(renderItem)}
        </ScrollView>

        <View style={{ marginRight: 18, marginLeft: 8 }}>
          <View style={styles.textFlex}>
            <Text style={styles.headText}>오늘은 윤날</Text>
            <Heart />
          </View>

          <View style={[styles.subTextFlex, { gap: 40 }]}>
            <Text style={styles.subText}>별점</Text>
            <View style={styles.detailFlex}>
              <Text style={[styles.subText, { color: theme.black }]}>4.0</Text>
              <StarRating stars={4} />
            </View>
          </View>

          <View style={styles.subTextFlex}>
            <Text style={styles.subText}>영업시간</Text>
            <Text style={[styles.subText, { color: theme.black }]}>
              10:00 - 18:00
            </Text>
          </View>
        </View>
      </View>

      {/* button */}
      <View style={styles.center}>
        <OnboardingButton
          text="예약"
          backgroundColor="#F3F3F3"
          textColor={theme.black}
          bottomSheet
          onPress={onPress}
        />
      </View>
    </View>
  );
};

export default MiddleInfoComponent;

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginBottom: 15,
  },
  textFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },
  detailFlex: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  subTextFlex: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    marginVertical: 5,
  },
  headText: {
    color: theme.black,
    fontSize: 24,
    fontFamily: theme.bold,
  },
  subText: {
    color: '#6F6F6F',
    fontSize: 14,
    fontFamily: theme.regular,
  },
  center: {
    alignItems: 'center',
  },
  itemContainer: {
    padding: 5,
    backgroundColor: theme.white,
  },
  image: {
    borderRadius: 10,
  },
});
