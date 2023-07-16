import { Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { theme } from 'styles/theme';

const ProfileScrollComponent = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImagePress = (index: number) => {
    setSelectedImageIndex(index);
  };

  const selectedImageItem = {
    borderColor: theme.pink,
    borderWidth: 2,
    borderRadius: 100,
  };

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={styles.imageView}
    >
      {Array.from(Array(9).keys()).map((index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleImagePress(index)}
          style={{ justifyContent: 'center' }}
          activeOpacity={1.0}
        >
          <Image
            style={[
              styles.image,
              styles.imageMargin,
              selectedImageIndex === index && selectedImageItem,
            ]}
            source={require('@assets/images/register/profileExample.png')}
          />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ProfileScrollComponent;

const styles = StyleSheet.create({
  imageView: {
    backgroundColor: '#FAFAFA',
    marginTop: 35,
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
