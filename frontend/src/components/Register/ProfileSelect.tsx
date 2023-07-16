import React from 'react';
import { registerStyles } from 'styles/register/styles';
import { Text, View } from 'react-native';
import ProfileComponent from './ProfileComponent';
import ProfileScrollComponent from './ProfileScrollComponent';
import { globalStyles } from 'styles/global';
import OnboardingButton from '@components/Common/OnboardingButton';
import { theme } from 'styles/theme';

const ProfileSelect = ({ navigation }: { navigation: any; route: any }) => {
  const textStyle = [
    registerStyles.inputLabel,
    {
      marginLeft: 15,
      paddingRight: 15,
    },
  ];

  return (
    <View style={globalStyles.buttonFlex}>
      <View style={registerStyles.profileContainer}>
        <Text style={textStyle}>프로필을 설정해주세요</Text>

        <ProfileComponent />

        <View>
          <ProfileScrollComponent />
        </View>
      </View>

      <View style={registerStyles.registerButtonView}>
        <OnboardingButton
          onPress={() => navigation.navigate('WelcomeScreen')}
          backgroundColor={theme.pink}
          textColor={theme.white}
          text="완료하기"
        />
      </View>
    </View>
  );
};

export default ProfileSelect;
