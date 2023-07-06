import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { ReactNode } from 'react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import Header from '@components/Register/Common/Header';
import Indicator from '@components/Register/Common/Indicator';
import OnboardingButton from '@components/Register/Common/OnboardingButton';

interface LayoutProps {
  navigation?: any;
  route?: any;
  children: ReactNode;
  profile?: boolean; // profile is checked
  check?: boolean; // checkScreen is checked
}

const Layout = ({ children, profile, check, navigation }: LayoutProps) => {
  // 프로필 설정, 서비스 체크 화면일 경우 scrollView 사용을 위해 TouchableWithoutFeedback 제거
  return profile || check ? (
    <View style={globalStyles.buttonFlex}>
      <SafeAreaView style={globalStyles.container}>
        <Header />

        <Indicator />
        {children}
      </SafeAreaView>

      <View style={globalStyles.buttonView}>
        <View style={styles.splitLine} />
        {/* 버튼 스타일 분기처리 */}
        {check ? (
          <OnboardingButton
            disabled
            backgroundColor={theme.disableButtonGray}
            textColor={theme.disableTextGray}
            text="완료하기"
          />
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
        <SafeAreaView style={globalStyles.container}>
          <Header />

          <Indicator />
          {children}
        </SafeAreaView>

        <View style={globalStyles.buttonView}>
          <View style={styles.splitLine} />
          <OnboardingButton
            disabled
            backgroundColor={theme.disableButtonGray}
            textColor={theme.disableTextGray}
            text="완료하기"
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
