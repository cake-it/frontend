import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'styles/theme';
import Setting from '@assets/images/myPage/settings.svg';
import Heart from '@assets/images/myPage/heart.svg';
import Version from '@assets/images/myPage/version.svg';
import MyPageListItem from './MyPageListItem';

const MyPageList = () => {
  return (
    <View style={styles.wrapper}>
      <MyPageListItem icon={<Setting />} title="설정" />
      <MyPageListItem icon={<Heart />} title="찜 목록" />
      <MyPageListItem icon={<Version />} title="현재 버전" subtitle="1.0.0" />

      {/* VOC 나오면 수정 예정 */}
      <View style={styles.voc}>
        <Text style={styles.vocText}>VOC</Text>
      </View>
    </View>
  );
};

export default MyPageList;

const styles = StyleSheet.create({
  wrapper: {
    gap: 20,
    marginTop: 23,
    marginLeft: 18,
    marginRight: 18,
  },

  // 디자인 나오면 수정 예정
  voc: {
    backgroundColor: theme.disableButtonGray,
    padding: 13,
    borderRadius: 10,
  },
  vocText: {
    textAlign: 'center',
    color: '#373737',
    fontSize: 14,
    fontFamily: theme.bold,
  },
});
