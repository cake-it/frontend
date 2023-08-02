import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Header from '@components/Common/Header';
import LikeComponent from '@components/MyPage/LikeList/LikeComponent';
import { globalStyles } from 'styles/global';

const LikeListScreen = () => {
  // BE에서 받아올 임시 데이터(추후 삭제)
  const data = [
    {
      id: 1,
      title: '오늘은 윤날',
      star: 4,
      time: '10:00 - 18:00',
      location: '서울시 성동구',
    },
    {
      id: 2,
      title: '오늘은 윤날임',
      star: 4,
      time: '10:00 - 18:00',
      location: '서울시 강남구',
    },
    {
      id: 3,
      title: '오늘은 윤날이래',
      star: 3,
      time: '10:00 - 18:00',
      location: '서울시 송파구',
    },
    {
      id: 4,
      title: '오늘은 윤날이래',
      star: 4,
      time: '10:00 - 18:00',
      location: '서울시 송파구',
    },
    {
      id: 5,
      title: '오늘은 윤날이래',
      star: 2,
      time: '10:00 - 18:00',
      location: '서울시 송파구',
    },
    {
      id: 6,
      title: '오늘은 윤날이래',
      star: 4,
      time: '10:00 - 18:00',
      location: '서울시 송파구',
    },
  ];

  return (
    <SafeAreaView style={globalStyles.container}>
      <Header title="찜 목록" />
      <View style={styles.margin} />

      <ScrollView style={styles.wrapper}>
        {data.map((item, index) => (
          <LikeComponent
            key={item.id}
            title={item.title}
            star={item.star}
            time={item.time}
            location={item.location}
            bottom={index === data.length - 1 ? 20 : null}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LikeListScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  margin: {
    marginBottom: 20,
  },
});
