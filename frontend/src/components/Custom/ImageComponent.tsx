import { Image, StyleSheet, View } from 'react-native';
import React from 'react';

const ImageComponent = () => {
  return (
    <>
      {/* 피그마 임시 로딩 */}
      <Image
        source={require('@assets/images/custom/customExample.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 380, // 추후 변경 가능성 O
    alignSelf: 'center',
  },
});
