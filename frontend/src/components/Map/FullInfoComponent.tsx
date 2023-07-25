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

const FullInfoComponent = ({ onPress }: { onPress: () => void }) => {
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
    color: string;
  }) => {
    return (
      <View style={styles.infoView}>
        <Text style={styles.subText}>{title}</Text>
        <Text
          // 이 부분도 나중에 data 받아 올 때 같이 수정 들어가야함
          numberOfLines={2}
          ellipsizeMode="tail"
          style={[styles.subText, { color }]}
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
      color: theme.black,
    },
    {
      title: '전화번호',
      content: '070-348-7064',
      color: '#3190FF',
    },
    {
      title: '가게소개',
      content:
        '가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지 가게소개 두줄까지',
      color: theme.black,
    },
    {
      title: '해시태그',
      content: '#레터링케이스 #강남맛집 #생신케이크',
      color: theme.black,
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

        <Text style={styles.subText}>별점</Text>
        <View style={{ flexDirection: 'row', gap: 10, marginTop: 5 }}>
          <Text style={styles.subText}>4.0</Text>
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
          backgroundColor={theme.pink}
          textColor={theme.white}
          // onPress={() => navigation.navigate('예약화면으로')} 예약화면으로 navigation
        />
      </View>
    </SafeAreaView>
  );
};

export default FullInfoComponent;

const imageSize = Platform.OS === 'ios' ? 200 : 140;

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    marginBottom: 13,
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
  infoView: {
    marginTop: 20,
    gap: 3,
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
