import {
  StyleSheet,
  View,
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import XButton from '@assets/images/common/xButton.svg';
import { theme } from 'styles/theme';
import { MyPageModalProps } from 'types/myPage/types';

const MyPageModal = ({
  showModal,
  setShowModal,
  modalType,
}: MyPageModalProps) => {
  // 로그아웃 or 탈퇴 modal 분기처리
  const logoutMode = modalType === '로그아웃';

  // 로그아웃 로직
  const handleLogout = () => {
    setShowModal(false);
  };

  // 탈퇴 로직
  const handleWithdraw = () => {
    setShowModal(false);
  };

  // modal 스타일 코드
  const modalContentStyle = [
    styles.modalContent,
    { height: logoutMode ? 180 : 205 },
  ];

  return (
    <>
      {/* Modal */}
      <Modal animationType="fade" transparent visible={showModal}>
        <TouchableWithoutFeedback onPress={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <TouchableWithoutFeedback>
              <View style={modalContentStyle}>
                {/* X Icon */}
                <TouchableOpacity
                  activeOpacity={1.0}
                  onPress={() => setShowModal(false)}
                  style={styles.icon}
                >
                  <XButton />
                </TouchableOpacity>

                {/* Title */}
                <Text style={styles.modalText}>
                  {logoutMode
                    ? '정말 로그아웃 하시겠습니까?'
                    : '탈퇴 시 모든 계정정보가 삭제됩니다.\n정말 탈퇴하시겠습니까?'}
                </Text>

                {/* button */}
                <View style={styles.buttonFlex}>
                  <TouchableOpacity
                    activeOpacity={1.0}
                    style={styles.button}
                    onPress={logoutMode ? handleLogout : handleWithdraw}
                  >
                    <Text style={styles.logoutText}>
                      {logoutMode ? '로그아웃' : '탈퇴'}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={1.0}
                    style={[styles.button, { backgroundColor: theme.pink }]}
                    onPress={() => setShowModal(false)}
                  >
                    <Text style={styles.continueText}>계속 이용하기</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default MyPageModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContent: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    elevation: 10,
    shadowColor: theme.black,
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },
  buttonFlex: {
    flexDirection: 'row',
    gap: 10,
  },
  modalText: {
    fontSize: 16,
    fontFamily: theme.medium,
    marginTop: 45,
    marginBottom: 35,
    textAlign: 'center',
    lineHeight: 25,
  },
  button: {
    backgroundColor: theme.disableButtonGray,
    width: 160,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#373737',
    fontSize: 14,
    fontFamily: theme.regular,
  },
  continueText: {
    color: theme.white,
    fontSize: 14,
    fontFamily: theme.bold,
  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
});
