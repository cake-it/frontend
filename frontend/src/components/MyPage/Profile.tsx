import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';

const Profile = () => {
  return (
    <>
      <Text style={styles.headerText}>내 프로필</Text>

      <View style={styles.profileView}>
        <Image source={require('@assets/images/register/profileExample.png')} />
        <View style={styles.nicknameView}>
          <Text style={styles.nicknameText}>행복한 오징어</Text>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 16,
    fontFamily: theme.bold,
    color: theme.black,
    marginTop: 30,
  },
  profileView: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  nicknameView: {
    backgroundColor: '#F3F3F3',
    padding: 8,
    borderRadius: 50,
    width: 110,
  },
  nicknameText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: theme.bold,
    color: '#373737',
  },
});
