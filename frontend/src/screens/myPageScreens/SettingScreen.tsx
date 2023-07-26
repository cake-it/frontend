import { SafeAreaView } from 'react-native';
import React from 'react';
import Header from '@components/Common/Header';
import SettingList from '@components/MyPage/Setting/SettingList';

const SettingScreen = () => {
  return (
    <SafeAreaView>
      <Header title="설정" />

      <SettingList />
    </SafeAreaView>
  );
};

export default SettingScreen;
