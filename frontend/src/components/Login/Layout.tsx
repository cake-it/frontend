import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import Header from '@components/Common/Header';
import OnboardingButton from '@components/Common/OnboardingButton';
import { theme } from 'styles/theme';
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
      <View style={globalStyles.buttonFlex}>
        {renderContent()}
        <View style={globalStyles.buttonView}>
          <View style={styles.splitLine} />
          <OnboardingButton
            disabled={disabled}
            onPress={onPress}
            backgroundColor={disabled ? theme.disableButtonGray : theme.pink}
            textColor={disabled ? theme.disableTextGray : theme.white}
            text="로그인"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Layout;

const styles = StyleSheet.create({
  splitLine: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#EDEDED',
  },
});
