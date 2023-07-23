import React from 'react';
import { theme } from 'styles/theme';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import LogoText from '@assets/images/common/logoText.svg';
import OnboardingButton from '@components/Common/OnboardingButton';
import { globalStyles } from 'styles/global';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
type Props = NativeStackScreenProps<StackParamList, 'OnboardingScreen'>;

const Onboarding = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.buttonFlex}>
      <SafeAreaView style={globalStyles.container}>
        <View style={styles.logoView}>
          <LogoText />
        </View>
      </SafeAreaView>

      <View style={globalStyles.buttonView}>
        <OnboardingButton
          onPress={() => navigation.navigate('RegisterRoute')}
          backgroundColor={theme.pink}
          textColor={theme.white}
          text="60초 회원가입"
        />
        <OnboardingButton
          onPress={() => navigation.navigate('LoginScreen')}
          backgroundColor={theme.white}
          borderColor="#DFDFDF"
          textColor="#404040"
          text="로그인"
        />
        <OnboardingButton
          onPress={() => navigation.navigate('CustomScreen')}
          backgroundColor={theme.white}
          borderColor="#DFDFDF"
          textColor="#404040"
          text="임시 (커스텀 이동)"
        />
        <OnboardingButton
          onPress={() => navigation.navigate('MapSearchScreen')}
          backgroundColor={theme.white}
          borderColor="#DFDFDF"
          textColor="#404040"
          text="임시 (지도 이동)"
        />
        <OnboardingButton
          onPress={() => navigation.navigate('CurationScreen')}
          backgroundColor={theme.white}
          borderColor="#DFDFDF"
          textColor="#404040"
          text="임시 (큐레이션 이동)"
        />
      </View>
    </View>
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
