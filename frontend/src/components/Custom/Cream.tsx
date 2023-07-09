import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { theme } from 'styles/theme';

const Cream = () => {
  // 임시 이미지 데이터, 추후 백엔드에서 받아옴
  const images = [
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
    require('@assets/images/register/profileExample.png'),
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImagePress = (index: number) => {
    if (selectedImageIndex === index) {
      setSelectedImageIndex(null);
    } else {
      setSelectedImageIndex(index);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        {images.map((imageSource, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(index)}
            style={[
              styles.imageItem,
              selectedImageIndex === index && styles.selectedImageItem,
              index === images.length - 1 && styles.lastImageItem,
            ]}
          >
            <Image source={imageSource} style={styles.image} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cream;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.white,
    padding: 40,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageItem: {
    borderWidth: 1,
    borderColor: 'transparent',
    borderRadius: 5,
    overflow: 'hidden',
    marginRight: 10,
    marginBottom: 25,
    alignSelf: 'flex-start',
  },
  selectedImageItem: {
    borderColor: theme.pink,
    borderWidth: 3,
    borderRadius: 100,
  },
  image: {
    width: 80,
    height: 80,
  },
  lastImageItem: {
    marginBottom: 60,
  },
});
