import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MyPageListItem from '../MyPageListItem';
import Policy from '@assets/images/myPage/policy.svg';
import Info from '@assets/images/myPage/personalInfo.svg';
import Logout from '@assets/images/myPage/logout.svg';
import Withdraw from '@assets/images/myPage/withdraw.svg';
import MyPageModal from './MyPageModal';

const SettingList = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

  // modal function
  const handleShowModal = (type: string) => {
    setShowModal(true);
    setModalType(type);
  };

  return (
    <View style={styles.container}>
      <MyPageListItem icon={<Policy />} title="이용약관" />
      <MyPageListItem icon={<Info />} title="개인정보 처리방침" />
      <MyPageListItem
        icon={<Logout />}
        title="로그아웃"
        onPress={() => handleShowModal('로그아웃')}
      />
      <MyPageListItem
        icon={<Withdraw />}
        title="회원탈퇴"
        onPress={() => handleShowModal('회원탈퇴')}
      />

      {/* Modal */}
      <MyPageModal
        modalType={modalType}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </View>
  );
};

export default SettingList;

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginRight: 18,
    gap: 20,
    marginTop: 40,
  },
});
