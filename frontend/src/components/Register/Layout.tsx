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
  navigation: any;
  route: any;
  children: ReactNode;
  checked?: boolean;
}

const Layout = ({ children, checked, navigation }: LayoutProps) => {
  // 프로필 설정 화면일경우 scrollView 사용을 위해 TouchableWithoutFeedback 제거
  return checked ? (
    <View style={globalStyles.buttonFlex}>
      <SafeAreaView style={globalStyles.container}>
        <Header />

        <Indicator />
        {children}
      </SafeAreaView>

      <View style={globalStyles.buttonView}>
        <View style={styles.splitLine} />
        <OnboardingButton
          disabled={!checked}
          onPress={() => navigation.navigate('WelcomeScreen')}
          backgroundColor={checked ? theme.pink : theme.disableButtonGray}
          textColor={checked ? theme.white : theme.disableTextGray}
          text="완료하기"
        />
      </View>
    </View>
  ) : (
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
            disabled={!checked}
            onPress={() => console.log('다음 페이지')}
            backgroundColor={checked ? theme.pink : theme.disableButtonGray}
            textColor={checked ? theme.white : theme.disableTextGray}
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
