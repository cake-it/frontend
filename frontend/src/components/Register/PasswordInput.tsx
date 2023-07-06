import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import { registerStyles } from 'styles/register/styles';
import IdView from './Common/IdView';
import Password from '@assets/images/register/passwordDot.svg';
import OffPassword from '@assets/images/register/unPasswordDot.svg';
import Fail from '@assets/images/register/fail.svg';

interface PasswordScreenProps {
  confirm?: boolean;
  navigation: any;
  route: any;
}

const PasswordInput = ({ navigation, confirm }: PasswordScreenProps) => {
  const [userPassword, setUserPassword] = useState('');
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [errorText, setErrorText] = useState('');

  const inputRef = useRef<TextInput>(null);

  // 최초 렌더링시 focus
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // password state 싸이클관리
  useEffect(() => {
    if (userPassword.length === 6) {
      confirm
        ? confirmPassword()
        : navigation.navigate('PasswordConfirmScreen'); // 생성 시 다음 페이지 navigate
    }
    // 컨펌 받고 수정 or fix
    if (userPassword.length !== 6) {
      setErrorText('');
    }
  }, [userPassword]);

  // 입력창 클릭시 focus
  const handleInputPress = () => {
    inputRef.current?.focus();
  };

  // 입력 기능
  const handleTextChange = (text: string) => {
    setUserPassword(text);
  };

  // *비밀번호 확인 페이지 - 일치 여부 확인 기능
  const confirmPassword = () => {
    // 임시 구현
    userPassword !== '123456'
      ? setErrorText('비밀번호가 일치하지 않습니다')
      : navigation.navigate('BirthGenderScreen'); // 다음 페이지로
  };

  // *비밀번호 확인 페이지 - 불일치시 비밀번호 초기화
  const handleResetPassword = () => {
    setUserPassword('');
  };

  // 스타일 분기 코드
  const passwordStyle = [
    styles.passwordDisplay,
    passwordFocused && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>
          {confirm ? '한 번 더 입력해주세요' : '비밀번호를 만들어 주세요'}
        </Text>

        {/* hidden input */}
        <TextInput
          ref={inputRef}
          style={styles.hiddenInput}
          maxLength={6}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          keyboardType="number-pad"
          onChangeText={handleTextChange}
          value={userPassword}
        />

        {/* 커스텀 입력창 */}
        <TouchableOpacity
          activeOpacity={1.0}
          onPress={handleInputPress}
          style={styles.passwordInputContainer}
        >
          {[...Array(6)].map((_, index) => (
            <View key={index} style={passwordStyle}>
              {userPassword === '' ? (
                <OffPassword />
              ) : userPassword.length > index ? (
                <Password />
              ) : null}
            </View>
          ))}
        </TouchableOpacity>

        {errorText !== '' && (
          <View
            style={[
              registerStyles.CheckTextView,
              { justifyContent: 'center', marginTop: 35 },
            ]}
          >
            <Text style={[registerStyles.checkText, { color: '#FF8080' }]}>
              {errorText}
            </Text>
            <Fail />
          </View>
        )}

        {/* 비밀번호 확인 페이지* - 일치 하지 않을 경우 안보이게  */}
        {errorText ? null : <IdView />}
      </View>

      {errorText && (
        <TouchableOpacity
          onPress={handleResetPassword}
          style={[registerStyles.button, { backgroundColor: theme.pink }]}
        >
          <Text style={[registerStyles.buttonText, { color: theme.white }]}>
            비밀번호 초기화
          </Text>
        </TouchableOpacity>
      )}
    </KeyboardAvoidingView>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  passwordInputContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  hiddenInput: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
  passwordDisplay: {
    alignItems: 'center',
    width: '9.5%',
    height: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
});
