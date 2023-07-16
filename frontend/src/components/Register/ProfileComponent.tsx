import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const ProfileComponent = () => {
  return (
    <>
      <View style={styles.profileImageView}>
        {/* 이미지 props 제공 예정 */}
        <Image source={require('@assets/images/register/profileExample.png')} />
      </View>
    </>
  );
};

export default ProfileComponent;

const styles = StyleSheet.create({
  profileImageView: {
    marginTop: 10,
    alignItems: 'center',
  },
});
