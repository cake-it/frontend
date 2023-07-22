import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Header from '@components/Common/Header';
import { LoginLayoutProps } from 'types/design/types';
import { globalStyles } from 'styles/global';

const Layout = ({ children, onPress, disabled }: LoginLayoutProps) => {
  const renderContent = () => (
    <SafeAreaView style={globalStyles.container}>
      <Header title="로그인" />

      {/* indicator 삭제로 인한 margin 처리 */}
      <View style={{ marginTop: 30 }} />
      {children}
    </SafeAreaView>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.buttonFlex}>{renderContent()}</View>
    </TouchableWithoutFeedback>
  );
};

export default Layout;
