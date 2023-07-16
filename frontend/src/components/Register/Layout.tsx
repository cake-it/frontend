import { Keyboard, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import { globalStyles } from 'styles/global';
import { RegisterLayoutProps } from 'types/design/types';
import Header from '@components/Common/Header';
import Indicator from '@components/Register/Common/Indicator';

const Layout = ({ children, profile }: RegisterLayoutProps) => {
  // 기본 렌더링 되는 layout
  const renderContent = () => (
    <SafeAreaView style={globalStyles.container}>
      <Header title="회원가입" />
      <Indicator />
      {children}
    </SafeAreaView>
  );

  // 프로필 설정일 경우 scrollView 사용을 위해 TouchableWithoutFeedback 제거
  return profile ? (
    renderContent()
  ) : (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {renderContent()}
    </TouchableWithoutFeedback>
  );
};

export default Layout;
