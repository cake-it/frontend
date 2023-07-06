import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import { LayoutProps } from 'types/design/types';
import Header from '@components/Register/Common/Header';
import Indicator from '@components/Register/Common/Indicator';
import OnboardingButton from '@components/Register/Common/OnboardingButton';

const Layout = ({ children, profile, check, navigation }: LayoutProps) => {
  const isProfileOrCheck = profile || check;

  const renderButton = () => (
    <OnboardingButton
      disabled
      backgroundColor={theme.disableButtonGray}
      textColor={theme.disableTextGray}
      text="완료하기"
    />
  );

  const renderContent = () => (
    <SafeAreaView style={globalStyles.container}>
      <Header />
      <Indicator />
      {children}
    </SafeAreaView>
  );

  // 프로필 설정, 서비스 체크 화면일 경우 scrollView 사용을 위해 TouchableWithoutFeedback 제거
  return isProfileOrCheck ? (
    <View style={globalStyles.buttonFlex}>
      {renderContent()}

      <View style={globalStyles.buttonView}>
        <View style={styles.splitLine} />
        {/* 버튼 스타일 분기처리 */}
        {check ? (
          renderButton()
        ) : (
          <OnboardingButton
            disabled={false}
            onPress={() => navigation.navigate('WelcomeScreen')}
            backgroundColor={theme.pink}
            textColor={theme.white}
            text="완료하기"
          />
        )}
      </View>
    </View>
  ) : (
    // default button
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.buttonFlex}>
        {renderContent()}

        <View style={globalStyles.buttonView}>
          <View style={styles.splitLine} />
          {renderButton()}
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
