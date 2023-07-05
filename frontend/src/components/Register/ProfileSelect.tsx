import React, { useState } from 'react';
import { registerStyles } from 'styles/register/styles';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { theme } from 'styles/theme';
import InfoLayout from './InfoLayout';

// 페이지 렌더링되면 기본 사진 선택되어 있음? 아니면 선택 해야하는지?
const ProfileSelect = () => {
  return (
    <ScrollView>
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>프로필을 설정해주세요</Text>

        {/* 컴포넌트 분할 할수도 있음 */}
        <View style={styles.profileImageView}>
          {/* 이미지 랜덤으로 제공 예정 */}
          <Image
            source={require('@assets/images/register/profileExample.png')}
          />
          <View style={styles.nicknameTextBox}>
            {/* 닉네임 랜덤으로 백엔드에서 받아서 구현 예정 */}
            <Text style={styles.nicknameText}>행복한오징어</Text>
          </View>
        </View>
      </View>

      {/* 컴포넌트 분할 할수도 있음 */}
      <ScrollView horizontal style={styles.imageView}>
        {Array.from(Array(9).keys()).map((index) => (
          <Image
            key={index}
            style={[styles.image, styles.imageMargin]}
            source={require('@assets/images/register/profileExample.png')}
          />
        ))}
      </ScrollView>

      <View style={[registerStyles.inputContainer, { marginBottom: 40 }]}>
        <InfoLayout index={4} />
      </View>
    </ScrollView>
  );
};

export default ProfileSelect;

const styles = StyleSheet.create({
  profileImageView: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  nicknameTextBox: {
    backgroundColor: '#F3F3F3',
    borderRadius: 34,
    width: 110,
  },
  nicknameText: {
    fontFamily: theme.bold,
    fontSize: 14,
    padding: 7,
    color: '#373737',
    textAlign: 'center',
  },
  imageView: {
    backgroundColor: '#FAFAFA',
    marginTop: 15,
    height: 85,
  },
  image: {
    width: 51,
    height: 51,
    alignSelf: 'center',
  },
  imageMargin: {
    marginLeft: 17,
  },
});
