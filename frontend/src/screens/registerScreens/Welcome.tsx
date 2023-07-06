import React from 'react';
import Header from '@components/Register/Common/Header';
import OnboardingButton from '@components/Register/Common/OnboardingButton';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import WelcomeComponent from '@components/Register/WelcomeComponent';

const Welcome = () => {
  return (
    <View style={globalStyles.buttonFlex}>
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>

        <WelcomeComponent />
      </SafeAreaView>

      <View style={globalStyles.buttonView}>
        <View style={styles.splitLine} />
        <OnboardingButton
          onPress={() => console.log('다음 페이지')}
          backgroundColor={theme.pink}
          textColor={theme.white}
          text="홈 화면으로 이동"
        />
      </View>
    </View>
  );
};

export default Welcome;

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
