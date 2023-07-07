import React from 'react';
import OnboardingButton from '@components/Common/OnboardingButton';
import WelcomeComponent from '@components/Register/WelcomeComponent';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';

const WelcomeScreen = () => {
  return (
    <View style={globalStyles.buttonFlex}>
      <SafeAreaView style={styles.container}>
        <WelcomeComponent />
      </SafeAreaView>

      <View style={globalStyles.buttonView}>
        <View style={styles.splitLine} />
        <OnboardingButton
          onPress={() => console.log('홈 페이지')}
          backgroundColor={theme.pink}
          textColor={theme.white}
          text="홈 화면으로 이동"
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  splitLine: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#EDEDED',
  },
});
