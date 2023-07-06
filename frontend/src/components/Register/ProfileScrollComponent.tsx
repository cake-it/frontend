import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ProfileScrollComponent = () => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.imageView}
    >
      {Array.from(Array(9).keys()).map((index) => (
        <Image
          key={index}
          style={[styles.image, styles.imageMargin]}
          source={require('@assets/images/register/profileExample.png')}
        />
      ))}
    </ScrollView>
  );
};

export default ProfileScrollComponent;

const styles = StyleSheet.create({
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
