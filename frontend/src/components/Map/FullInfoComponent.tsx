import {
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useCallback } from 'react';
import { StarRating } from 'utils/map/StartCount';
import Heart from '@assets/images/common/heart.svg';
import { theme } from 'styles/theme';
import Header from '@components/Common/Header';
import OnboardingButton from '@components/Common/OnboardingButton';
import { globalStyles } from 'styles/global';
import { ScrollView } from 'react-native-gesture-handler';
import { BottomSheetFullProps } from 'types/map/types';

const FullInfoComponent = ({ onPress, navigation }: BottomSheetFullProps) => {
  // 임시 데이터 (추후 백엔드에서 받아옴)
  const data = [
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
    require('@assets/images/map/example.png'),
  ];

  // render
  const renderItem = useCallback(
    (item: any, index: any) => (
      <View key={index} style={styles.itemContainer}>
        <Image source={item} style={styles.image} resizeMode="contain" />
      </View>
    ),
    []
  );

  // 임시 구현 (백엔드에서 받아올 데이터 예상)
  const InfoItem = ({
    title,
    content,
    color,
  }: {
    title: string;
    content: string;
    color?: string;
  }) => {
    return (
      <View style={styles.infoView}>
        <Text style={styles.subText}>{title}</Text>
        <Text
          // 이 부분도 나중에 data 받아 올 때 같이 수정 들어가야함
          numberOfLines={3}
          ellipsizeMode="tail"
          style={[styles.subBlackText, { color }]}
        >
          {content}
        </Text>
      </View>
    );
  };

  const infoData = [
    {
      title: '영업시간',
      content: '10:00 - 18:00',
    },
    {
      title: '전화번호',
      content: '070-348-7064',
      color: '#3190FF',
    },
    {
      title: '가게소개',
      content:
        '가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지',
    },
    {
      title: '해시태그',
      content: '#레터링케이스 #강남맛집 #생신케이크',
    },
  ];

  return (
    // 안드로이드일 때 상하 사이즈 분기처리
    // 해당 코드 추후 받는 데이터에 따라서 코드 클린하게 수정하기
    <SafeAreaView
      style={{ bottom: Platform.OS === 'android' ? 13 : undefined }}
    >
      <Header onPress={onPress} bottom title="가게 정보" />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollContainer}
      >
        {data.map(renderItem)}
      </ScrollView>

      <View style={styles.container}>
        <View style={styles.textFlex}>
          <Text style={styles.headText}>오늘은 윤날</Text>
          <Heart />
        </View>

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={[styles.subText, { marginRight: 40 }]}>별점</Text>
          <Text
            style={[styles.subText, { color: theme.black, marginRight: 7 }]}
          >
            4.0
          </Text>
          <StarRating stars={4} />
        </View>

        {infoData.map((item, index) => (
          <InfoItem
            key={index}
            title={item.title}
            content={item.content}
            color={item.color}
          />
        ))}
      </View>

      <View style={[globalStyles.buttonView, { top: 10 }]}>
        <OnboardingButton
          text="예약"
          backgroundColor="#F3F3F3"
          textColor={theme.black}
          bottomSheet
          onPress={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default FullInfoComponent;

const imageSize = Platform.OS === 'ios' ? 260 : 200;

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 15,
  },
  textFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginBottom: 15,
  },
  infoView: {
    flexDirection: 'row',
    marginTop: 20,
    gap: 15,
    width: '80%',
  },
  headText: {
    color: theme.black,
    fontSize: 28,
    fontFamily: theme.bold,
  },
  subText: {
    color: '#6F6F6F',
    fontSize: 14,
    marginTop: 1.5,
    fontFamily: theme.regular,
  },
  subBlackText: {
    color: theme.black,
    fontSize: 16,
    fontFamily: theme.regular,
  },
  scrollContainer: {
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 10,
  },
  itemContainer: {
    padding: 6,
    backgroundColor: theme.white,
  },
  image: {
    borderRadius: 10,
    width: imageSize,
    height: imageSize,
  },
});
