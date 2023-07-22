import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import LinearGradient from 'react-native-linear-gradient';
import { CardProps } from 'types/curation/types';

// 임시 데이터
export const data = [
  {
    image: require('@assets/images/curation/example.png'),
    tag: '#태그태그, #태그',
    headText: '케이크 보다\n핫 한 이것, 초',
    subText:
      '요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중 요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중',
  },
  {
    image: require('@assets/images/curation/example2.png'),
    tag: '#태그태그, #태그',
    headText: '케이크 보다\n핫 한 이것, 초',
    subText:
      '요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중 요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중',
  },
  {
    image: require('@assets/images/curation/example3.png'),
    tag: '#태그태그, #태그',
    headText: '케이크 보다\n핫 한 이것, 초',
    subText:
      '요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중 요즘은 케이크 디자인이 아니라 “이것” 본다고 ? 두 줄까지 가능 아무거나 입력 중',
  },
];

const Card = ({
  image,
  tag,
  headText,
  subText,
  setBlogPressed,
  bottom,
}: CardProps) => {
  return (
    <TouchableOpacity activeOpacity={1.0} onPress={() => setBlogPressed(true)}>
      <ImageBackground
        source={image}
        style={[styles.container, { marginBottom: bottom }]}
        borderRadius={20}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['transparent', 'rgba(0, 0, 0, 0.68)']}
          style={styles.gradient}
        />
        <View style={styles.wrapper}>
          <View style={styles.tagView}>
            <Text style={styles.tagText}>{tag}</Text>
          </View>
          <Text style={styles.headerText}>{headText}</Text>
          <Text style={styles.subText} numberOfLines={2} ellipsizeMode="tail">
            {subText}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};
export default Card;

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 480,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  wrapper: {
    marginLeft: 18,
    marginRight: 18,
  },
  tagView: {
    backgroundColor: theme.pink,
    padding: 6,
    width: 125,
    borderRadius: 30,
    marginBottom: 10,
  },
  tagText: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
    textAlign: 'center',
  },
  headerText: {
    color: theme.white,
    fontSize: 30,
    fontFamily: theme.bold,
    lineHeight: 40,
    marginBottom: 10,
  },
  subText: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.regular,
    marginBottom: 25,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 180,
    borderRadius: 20,
  },
});
