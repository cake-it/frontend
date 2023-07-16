import React from 'react';
import { registerStyles } from 'styles/register/styles';
import { ScrollView, Text, View } from 'react-native';
import InfoLayout from './InfoLayout';
import ProfileComponent from './ProfileComponent';
import ProfileScrollComponent from './ProfileScrollComponent';

const ProfileSelect = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>프로필을 설정해주세요</Text>

        <ProfileComponent />
      </View>

      <ProfileScrollComponent />

      <View style={[registerStyles.inputContainer, { marginBottom: 40 }]}>
        <InfoLayout index={4} />
      </View>
    </ScrollView>
  );
};

export default ProfileSelect;
