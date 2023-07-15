import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { customStyles } from './styles';
import { theme } from 'styles/theme';
import Green from '@assets/images/custom/sticker/greenSticker.svg';
import White from '@assets/images/custom/sticker/whiteSticker.svg';
import Yellow from '@assets/images/custom/sticker/yellowSticker.svg';
import XIcon from '@assets/images/common/backgroundXIcon.svg';

const Sticker = () => {
  // 임시
  const stickers = [
    <Yellow />,
    <White />,
    <Green />,

    <White />,
    <Green />,
    <White />,
    <Green />,
    <White />,
    <Green />,
    <White />,
    <Green />,
    <White />,
    <Green />,
    // Add more stickers here
  ];

  // 임시
  const stickersExample = [
    <Yellow width={32} height={30} />,
    <White width={32} height={30} />,
    <Green width={32} height={30} />,

    <White width={32} height={30} />,
    <Green width={32} height={30} />,
    <White width={32} height={30} />,
    <Green width={32} height={30} />,
    <White width={32} height={30} />,
    <Green width={32} height={30} />,
    <White width={32} height={30} />,
    <Green width={32} height={30} />,
    <White width={32} height={30} />,
    <Green width={32} height={30} />,
  ];

  const [selectedStickers, setSelectedStickers] = useState<number[]>([]);

  console.log(selectedStickers);

  // 스티커 선택
  const handleStickerPress = (index: number) => {
    if (selectedStickers.length >= 4) {
      return; // 최대 개수인 4개 이상인 경우 추가하지 않음
    }

    setSelectedStickers([...selectedStickers, index]);
  };

  // 선택된 스티커 삭제
  const handleDeleteSticker = (index: number) => {
    setSelectedStickers((prevStickers) => {
      const updatedStickers = [...prevStickers];
      updatedStickers.splice(index, 1);
      return updatedStickers;
    });
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 선택된 스티커 최대 4장 */}
      {selectedStickers.length > 0 && (
        <View style={styles.stickerBox}>
          {selectedStickers.map((index, i) => (
            <View style={{ alignSelf: 'center' }} key={`${index}_${i}`}>
              <XIcon
                style={styles.xIcon}
                onPress={() => handleDeleteSticker(i)}
              />
              <View style={styles.selectSticker}>{stickersExample[index]}</View>
            </View>
          ))}
        </View>
      )}

      {/* 스티커 선택 */}
      <ScrollView
        style={customStyles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={customStyles.imageContainer}>
          {stickers.map((sticker, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleStickerPress(index)}
              style={[
                customStyles.letterImageItem,
                { backgroundColor: '#FFFFFF' },
              ]}
            >
              <View style={{ alignSelf: 'center' }}>{sticker}</View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Sticker;

const styles = StyleSheet.create({
  stickerBox: {
    backgroundColor: '#F5F5F5',
    height: 81,
    flexDirection: 'row',
  },
  xIcon: {
    position: 'absolute',
    right: -6,
    top: -6,
    zIndex: 10,
  },
  selectSticker: {
    backgroundColor: theme.white,
    width: 40,
    height: 40,
    borderRadius: 100,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
