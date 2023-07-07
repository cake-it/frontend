import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import { registerStyles } from 'styles/register/styles';
import Password from '@assets/images/register/passwordDot.svg';
import OffPassword from '@assets/images/register/unPasswordDot.svg';
import ErrorTextComponent from '@components/Register/Common/ErrorTextComponent';
import KeyboardButtonComponent from '@components/Register/Common/KeyboardButtonComponent';
import { LoginScreenProps } from 'types/login/types';

const LoginInput = ({
  setDisabled,
  disabled,
  handleConfirmLogin,
  loginError,
  userId,
  setUserId,
  userPassword,
  setUserPassword,
  setLoginError,
}: LoginScreenProps) => {
  const [idFocused, setIdFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const idInputRef = useRef<TextInput>(null);
  const passwordInputRef = useRef<TextInput>(null);

  // focused 관리
  const isFocused = idFocused || passwordFocused;

  // 입력창 클릭시 focus
  const handleInputPress = () => {
    passwordInputRef.current?.focus();
  };

  // 최초 렌더링시 input focus (안드로이드 버그 확인으로 setTimeout() 코드 구현)
  useEffect(() => {
    setTimeout(() => idInputRef.current?.focus(), 0);
  }, []);

  // text 입력 싸이클 관리
  useEffect(() => {
    userId !== '' && userPassword.length === 6
      ? setDisabled(false)
      : setDisabled(true),
      setLoginError(false);
  }, [userId, userPassword]);

  // 스타일 분기 코드
  const inputStyle = [
    styles.idInput,
    idFocused && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const passwordStyle = [
    styles.passwordDisplay,
    passwordFocused && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const buttonStyle = [
    registerStyles.button,
    !disabled && { backgroundColor: theme.pink },
  ];

  const buttonTextStyle = [
    registerStyles.buttonText,
    !disabled && { color: theme.white },
  ];

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.infoText}>아이디</Text>
        <TextInput
          ref={idInputRef}
          style={inputStyle}
          maxLength={15}
          autoCapitalize="none"
          autoComplete="off"
          onFocus={() => setIdFocused(true)}
          onBlur={() => setIdFocused(false)}
          autoCorrect={false}
          placeholder="아이디 입력"
          placeholderTextColor="#DBDBDB"
          onChangeText={(text) => setUserId(text)}
          value={userId}
        />

        <Text style={[registerStyles.infoText, { marginTop: 40 }]}>
          비밀번호
        </Text>
        {/* hidden input */}
        <TextInput
          ref={passwordInputRef}
          style={styles.hiddenInput}
          maxLength={6}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
          keyboardType="number-pad"
          onChangeText={(value) => setUserPassword(value)}
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

        {loginError && (
          <ErrorTextComponent errorText="아이디와 혹은 비밀번호가 일치하지 않습니다" />
        )}
      </View>

      {isFocused && (
        <KeyboardButtonComponent
          onPress={handleConfirmLogin}
          buttonStyle={buttonStyle}
          buttonTextStyle={buttonTextStyle}
          disabled={disabled}
          text="로그인"
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default LoginInput;

const styles = StyleSheet.create({
  idInput: {
    width: '100%',
    fontSize: 20,
    fontFamily: theme.bold,
    color: theme.black,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingBottom: 5,
  },
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
  splitLine: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#EDEDED',
  },
});
