import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { customStyles } from './styles';
import CameraIcon from '@assets/images/custom/camera.svg';
import Plus from '@assets/images/common/plus.svg';

const Image = () => {
  return (
    <View style={customStyles.container}>
      <View style={customStyles.uploadWrapper}>
        <Text style={customStyles.labelText}>사진을 업로드 해주세요 *o*</Text>

        <View style={customStyles.cameraView}>
          <CameraIcon />
          <TouchableOpacity
            // onPress={} 갤러리 사진 불러오기
            activeOpacity={1.0}
            style={customStyles.uploadButton}
          >
            <Plus />
            <Text style={customStyles.labelText}>사진 업로드</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Image;
