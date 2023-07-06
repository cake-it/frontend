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
import InfoLayout from './InfoLayout';
import { Props } from '@screens/registerScreens/BirthGenderScreen';

// 모든값 입력되면 다음 페이지로 navigate
const BirthGenderInput = ({ navigation }: Props) => {
  const [userBirth, setUserBirth] = useState('');
  const [userGender, setUserGender] = useState('');
  const [birthFocused, setBirthFocused] = useState(false);
  const [genderFocused, setGenderFocused] = useState(false);

  const birthInputRef = useRef<TextInput>(null);
  const genderInputRef = useRef<TextInput>(null);

  // 스타일 분기 코드
  const birthInputStyle = [
    styles.input,
    birthFocused && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const genderInputStyle = [
    styles.input,
    genderFocused && {
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

  // 생년월일 6자리 + 성별 모두 입력시 다음 page로
  useEffect(() => {
    if (userBirth.length === 6 && userGender.length === 1) {
      navigation.navigate('CheckScreen');
    }
  }, [userBirth, userGender]);

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>생일과 성별을 알려주세요</Text>

        <View style={registerStyles.inputFlex}>
          <TextInput
            ref={birthInputRef}
            style={birthInputStyle}
            maxLength={6}
            onFocus={() => setBirthFocused(true)}
            onBlur={() => setBirthFocused(false)}
            placeholder="생년월일 입력"
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
            onFocus={() => setGenderFocused(true)}
            onBlur={() => setGenderFocused(false)}
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
