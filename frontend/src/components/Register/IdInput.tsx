import React, { useEffect, useRef, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from 'styles/theme';
import { idRegex } from 'utils/regex';
import { globalStyles } from 'styles/global';
import { registerStyles } from 'styles/register/styles';
import Pass from '@assets/images/register/pass.svg';
import Fail from '@assets/images/register/fail.svg';
import { Props } from '@screens/registerScreens/IdScreen';
import KeyboardButtonComponent from './Common/KeyboardButtonComponent';

const IdInput = ({ navigation }: Props) => {
  const [userId, setUserId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [checkText, setCheckText] = useState('');
  const [isValidId, setIsValidId] = useState(false);

  const idInputRef = useRef<TextInput>(null);

  // 아이디 입력 시 정규식 검사
  useEffect(() => {
    setIsValidId(idRegex.test(userId));
  }, [userId]);

  // 최초 렌더링시 input focus (안드로이드 버그 확인으로 setTimeout() 코드 구현)
  useEffect(() => {
    setTimeout(() => idInputRef.current?.focus(), 0);
  }, []);

  // 중복확인 (임시)
  const handleDuplicationCheck = () => {
    // API 성공시 -> 다음 화면 넘어가기
    navigation.navigate('PasswordScreen');
    // API 실패시 버튼 disabled && 에러 텍스트
  };

  // 스타일 분기 코드
  const inputStyle = [
    styles.idInput,
    isFocused && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const buttonStyle = [
    registerStyles.button,
    isValidId && { backgroundColor: theme.pink },
  ];

  const duplicateTextStyle = [
    registerStyles.buttonText,
    isValidId && { color: theme.white },
  ];

  const checkTextStyle = [
    registerStyles.checkText,
    !isValidId && { color: '#FF8080' },
    isValidId && { color: '#4EBE4B' },
  ];

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>아이디를 만들어 주세요</Text>

        <TextInput
          ref={idInputRef}
          style={inputStyle}
          maxLength={15}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="아이디 입력"
          placeholderTextColor="#DBDBDB"
          onChangeText={(text) => setUserId(text)}
          value={userId}
        />
        {userId !== '' && (
          <View style={registerStyles.CheckTextView}>
            <Text style={checkTextStyle}>
              {checkText ? checkText : '영문, 숫자 포함 7-12자'}
            </Text>
            {isValidId ? <Pass /> : <Fail />}
          </View>
        )}
      </View>

      {isFocused && (
        <KeyboardButtonComponent
          onPress={handleDuplicationCheck}
          buttonStyle={buttonStyle}
          disabled={!isValidId}
          buttonTextStyle={duplicateTextStyle}
          text="중복체크"
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default IdInput;

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
});
