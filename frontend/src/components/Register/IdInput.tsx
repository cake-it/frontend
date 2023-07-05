import React, { useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { theme } from 'styles/theme';
import { idRegex } from 'utils/regex';
import Pass from '@assets/images/register/pass.svg';
import Fail from '@assets/images/register/fail.svg';
import { globalStyles } from 'styles/global';
import { registerStyles } from 'styles/register/styles';

const IdInput = () => {
  const [userId, setUserId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [checkText, setCheckText] = useState('');
  const [isValidId, setIsValidId] = useState(false);

  // 아이디 입력 시 정규식 검사
  useEffect(() => {
    setIsValidId(idRegex.test(userId));
  }, [userId]);

  // 중복확인 (임시)
  const handleDuplicationCheck = () => {
    // API 성공시 -> 다음 화면 넘어가기
    // API 실패시 버튼 disabled && 에러 텍스트
  };

  // 스타일 분기 코드
  const inputStyle = [
    styles.idInput,
    userId !== '' && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  const buttonStyle = [
    styles.button,
    userId !== '' && isValidId && { backgroundColor: theme.pink },
  ];

  const duplicateTextStyle = [
    styles.buttonText,
    userId !== '' && isValidId && { color: theme.white },
  ];

  const checkTextStyle = [
    styles.checkText,
    !isValidId && { color: '#FF8080' },
    isValidId && { color: '#4EBE4B' },
  ];

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>아이디를 만들어 주세요</Text>

        <TextInput
          style={inputStyle}
          maxLength={15}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="아이디 입력"
          placeholderTextColor="#DBDBDB"
          onChangeText={(text) => setUserId(text)}
          value={userId}
        />
        {userId !== '' && (
          <View style={styles.CheckTextView}>
            <Text style={checkTextStyle}>
              {checkText ? checkText : '영문, 숫자 포함 7-12자'}
            </Text>
            {isValidId ? <Pass /> : <Fail />}
          </View>
        )}
      </View>

      {isFocused && (
        <TouchableOpacity style={buttonStyle}>
          <Text style={duplicateTextStyle}>중복체크</Text>
        </TouchableOpacity>
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
  button: {
    width: '100%',
    paddingVertical: 20,
    backgroundColor: theme.disableButtonGray,
    justifyContent: 'center',
  },
  buttonText: {
    fontFamily: theme.medium,
    fontSize: 14,
    textAlign: 'center',
    color: theme.disableTextGray,
  },
  CheckTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 6,
  },
  checkText: {
    fontFamily: theme.medium,
    fontSize: 14,
  },
});
