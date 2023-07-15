import { Animated, Modal, Platform, StyleSheet, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from 'styles/global';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { toastConfig } from '@components/Common/ToastComponent';
import ImageComponent from '@components/Custom/ImageComponent';
import CustomTabView from '@components/Custom/CustomTabView';
import Header from '@components/Custom/Header';

const CustomScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(0));

  const topValue = Platform.OS === 'android' ? 25 : 55;

  const openModal = () => {
    setShowModal(true);
  };

  // 토스트 + 모달이 닫힐때 초간격으로 fade - out
  const closeModal = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShowModal(false);
    });
  };

  // modal 배경 애니메이션 (fade - in)
  useEffect(() => {
    if (showModal) {
      showToast();
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        closeModal();
      }, 3000);
    }
  }, [showModal]);

  // 토스트 메세지 show
  const showToast = () => {
    Toast.show({
      position: 'top',
      topOffset: topValue,
      visibilityTime: 3000,
      type: 'codeToast',
    });
  };

  return (
    <View style={[globalStyles.container, { backgroundColor: '#FF815F' }]}>
      <Header showToast={openModal} />

      <ImageComponent />

      <CustomTabView />

      <Modal transparent visible={showModal} onRequestClose={closeModal}>
        <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]} />
        <Toast config={toastConfig} />
      </Modal>
    </View>
  );
};

export default CustomScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 24,
    color: 'white',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
