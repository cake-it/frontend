import {
  Animated,
  ImageBackground,
  Modal,
  Platform,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { globalStyles } from 'styles/global';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { toastConfig } from '@components/Common/ToastComponent';
import ImageComponent from '@components/Custom/ImageComponent';
import CustomTabView from '@components/Custom/CustomTabView';
import Header from '@components/Custom/Header';

// 추후 기능 구현하면서 코치마크 최초 렌더링시에만 open -> 이후에는 다시 오픈 X
// 이 부분 recoil로 상태관리하기

const CustomScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCoach, setShowCoach] = useState(true);
  const [fadeAnim] = useState(new Animated.Value(0));

  const topValue = Platform.OS === 'android' ? 25 : 55;

  const openModal = () => {
    setShowModal(true);
  };

  // 코치마크 close
  const handleCoachClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setShowCoach(false);
    });
  };

  // 최초 렌더링시 코치마크 show
  useEffect(() => {
    if (showCoach) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 900,
        useNativeDriver: true,
      }).start(() => {
        setShowCoach(true);
      });
    }
  }, []);

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

  // 토스트 + 모달 애니메이션 (fade - in)
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

      {/* 코치 마크 */}
      <Modal transparent visible={showCoach}>
        <Animated.View
          style={[
            styles.modalContainer,
            { backgroundColor: undefined, opacity: fadeAnim },
          ]}
        >
          <TouchableWithoutFeedback onPress={handleCoachClose}>
            <ImageBackground
              source={require('@assets/images/custom/coachMark.png')}
              style={styles.image}
            />
          </TouchableWithoutFeedback>
        </Animated.View>
      </Modal>

      {/* 토스트 */}
      <Modal transparent visible={showModal} onRequestClose={closeModal}>
        <Animated.View style={[styles.modalContainer, { opacity: fadeAnim }]} />
        <Toast config={toastConfig} />
      </Modal>
    </View>
  );
};

export default CustomScreen;

// 안드로이드 분기처리
const height = Platform.OS === 'android' ? '103%' : '100.3%';

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
  image: {
    width: '100%',
    height: height,
    bottom: 3,
  },
});
