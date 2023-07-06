import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';

const ProfileComponent = ({ style }: { style?: boolean }) => {
  return (
    <>
      <View style={[styles.profileImageView, style && { marginBottom: 50 }]}>
        {/* 이미지 랜덤으로 제공 예정 */}
        <Image source={require('@assets/images/register/profileExample.png')} />

        {style ? (
          <Text style={[styles.nicknameText, { fontSize: 16 }]}>
            {/* 닉네임 랜덤으로 백엔드에서 받아서 구현 예정 */}
            행복한오징어
          </Text>
        ) : (
          <View style={styles.nicknameTextBox}>
            {/* 닉네임 랜덤으로 백엔드에서 받아서 구현 예정 */}
            <Text style={styles.nicknameText}>행복한오징어</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default ProfileComponent;

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
});
