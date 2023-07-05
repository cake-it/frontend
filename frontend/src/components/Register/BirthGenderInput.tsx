import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import { registerStyles } from 'styles/register/styles';
import Dash from '@assets/images/register/dash.svg';
import Dots from '@assets/images/register/dots.svg';
import Password from '@assets/images/register/password.svg';
import IdView from './Common/IdView';
import InfoLayout from './InfoLayout';

// 모든값 입력되면 다음 페이지로 navigate
const BirthGenderInput = () => {
  const [userBirth, setUserBirth] = useState('');
  const [userGender, setUserGender] = useState('');

  const birthInputRef = useRef<TextInput>(null);
  const genderInputRef = useRef<TextInput>(null);

  // 스타일 분기 코드
  const birthInputStyle = [
    styles.input,
    userBirth !== '' && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const genderInputStyle = [
    styles.input,
    userGender !== '' && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  // 최초 렌더링시 input focus
  useEffect(() => {
    birthInputRef.current?.focus();
  }, []);

  // 생년월일 6자리 모두 입력시 다음 input으로 focus
  useEffect(() => {
    if (userBirth.length === 6) {
      genderInputRef.current?.focus();
    }
  }, [userBirth]);

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>생일과 성별을 알려주세요</Text>
        <Text style={registerStyles.infoText}>생년월일/성별</Text>

        <View style={registerStyles.inputFlex}>
          <TextInput
            ref={birthInputRef}
            style={birthInputStyle}
            maxLength={6}
            keyboardType="number-pad"
            placeholderTextColor={theme.placeholderTextColor}
            onChangeText={(value) => setUserBirth(value)}
            onSubmitEditing={() => genderInputRef.current?.focus()}
            value={userBirth}
          />

          <Dash />

          <TextInput
            ref={genderInputRef}
            style={[genderInputStyle, { textAlign: 'center', width: '10%' }]}
            maxLength={1}
            keyboardType="number-pad"
            placeholderTextColor={theme.placeholderTextColor}
            onChangeText={(value) => setUserGender(value)}
            value={userGender}
          />

          <Dots />
        </View>

        <InfoLayout index={2} />
      </View>
    </KeyboardAvoidingView>
  );
};

export default BirthGenderInput;

const styles = StyleSheet.create({
  input: {
    width: '40%',
    fontSize: 20,
    fontFamily: theme.bold,
    color: theme.black,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
});
