import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { customStyles } from './styles';

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
    <ScrollView
      style={customStyles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={customStyles.imageContainer}>
        {images.map((imageSource, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(index)}
            style={[
              customStyles.imageItem,
              selectedImageIndex === index && customStyles.selectedImageItem,
              index === images.length - 1 && customStyles.lastImageItem,
            ]}
          >
            <Image
              source={imageSource}
              style={customStyles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Cream;
