import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import { StarRating } from 'utils/map/StartCount';
import OnHeart from '@assets/images/myPage/onHeart.svg';
import { LikeComponentProps } from 'types/myPage/types';

const LikeComponent = ({
  title,
  star,
  time,
  location,
  bottom,
}: LikeComponentProps) => {
  return (
    <View style={[styles.likeBox, { marginBottom: bottom }]}>
      {/* 대표 이미지 */}
      <Image
        source={require('@assets/images/map/example.png')}
        style={styles.image}
        borderRadius={10}
        resizeMode="contain"
      />

      <View style={{ gap: 8 }}>
        {/* 가게 이름 */}
        <Text style={styles.titleText}>{title}</Text>

        {/* 찜 아이콘 */}
        {/* 클릭시 찜 삭제 */}
        <TouchableOpacity style={styles.icon}>
          <OnHeart />
        </TouchableOpacity>

        {/* 별점 */}
        <View style={styles.starView}>
          <Text style={styles.regularText}>{star}.0</Text>
          <StarRating stars={star} />
        </View>

        {/* 영엽시간 */}
        <Text style={styles.regularText}>{time}</Text>

        {/* 가게 위치 */}
        <Text style={styles.regularText}>{location}</Text>
      </View>
    </View>
  );
};

export default LikeComponent;

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
  },
  likeBox: {
    backgroundColor: theme.white,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 15,
    padding: 12,
    borderRadius: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    elevation: 10,
    flexDirection: 'row',
    gap: 18,
  },
  titleText: {
    fontSize: 20,
    fontFamily: theme.bold,
    color: theme.black,
    marginBottom: 10,
  },
  regularText: {
    fontSize: 14,
    fontFamily: theme.regular,
    color: theme.black,
  },
  starView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    position: 'absolute',
    right: -70,
    top: 2,
  },
});
