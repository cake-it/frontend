import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { customStyles } from './styles';
import Pink from '@assets/images/custom/letter/pink.svg';

// 이미지 파일 이슈
const Letter = () => {
  const images = [Pink];

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
      <View style={customStyles.letterLabelBox}>
        <Text style={[customStyles.labelText, { color: '#C6C6C6' }]}>
          원하는 문구를 입력해주세요 ?o?
        </Text>
      </View>

      <View style={customStyles.imageContainer}>
        {images.map((imageSource, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleImagePress(index)}
            style={[
              customStyles.letterImageItem,
              selectedImageIndex === index && customStyles.selectedImageItem,
              index === images.length - 1 && customStyles.lastImageItem,
            ]}
          >
            <View style={{ alignSelf: 'center' }}>
              <Pink />
            </View>
            {/* <Image
              source={require('@assets/images/custom/letter/파랑.png')}
              style={{ alignSelf: 'center', width: 100, height: 20 }}
              resizeMode="contain"
            /> */}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Letter;
