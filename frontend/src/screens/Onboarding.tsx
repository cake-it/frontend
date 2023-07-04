import React from 'react';
import { theme } from 'styles/theme';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LogoText from '@assets/images/common/logoText.svg';
import OnboardingButton from '@components/Common/OnboardingButton';
import { globalStyles } from 'styles/global';

const Onboarding = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.logoView}>
        <LogoText />
      </View>

      <View style={globalStyles.buttonView}>
        <OnboardingButton
          backgroundColor={theme.pink}
          textColor={theme.white}
          text="60초만에 회원가입"
        />
        <OnboardingButton
          backgroundColor={theme.white}
          borderColor="#DFDFDF"
          textColor="#404040"
          text="로그인"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  logoView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});