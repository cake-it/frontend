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
import { Props } from '@screens/registerScreens/IdScreen';
import { registerStyles } from 'styles/register/styles';
import Pass from '@assets/images/register/pass.svg';
import Fail from '@assets/images/register/fail.svg';
import OnboardingButton from '@components/Common/OnboardingButton';

const IdInput = ({ navigation }: Props) => {
  const [userId, setUserId] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [checkText, setCheckText] = useState('영문, 숫자 포함 7-12자');
  const [isValidId, setIsValidId] = useState(false);
  const disabledCheck = userId !== '' && isValidId;

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
    // API 성공시 ->
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

<<<<<<< HEAD
  const buttonStyle = [
    registerStyles.button,
    isValidId && { backgroundColor: theme.pink },
  ];

  const duplicateTextStyle = [
    registerStyles.buttonText,
    isValidId && { color: theme.white },
=======
  const duplicateButtonStyle = [
    styles.duplicateButton,
    disabledCheck && { backgroundColor: theme.pink },
  ];

  const duplicateTextStyle = [
    styles.duplicateText,
    disabledCheck && { color: theme.white },
>>>>>>> main
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

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
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

          <TouchableOpacity
            disabled={!disabledCheck}
            onPress={() => console.log('중복확인 API')}
            activeOpacity={1.0}
            style={duplicateButtonStyle}
          >
            <Text style={duplicateTextStyle}>중복확인</Text>
          </TouchableOpacity>
        </View>

        {userId !== '' ? (
          // 정규식 분기처리
          <View style={registerStyles.CheckTextView}>
            <Text style={checkTextStyle}>
              {checkText ? checkText : '영문, 숫자 포함 7-12자'}
            </Text>
            {isValidId ? <Pass /> : <Fail />}
          </View>
        ) : (
          // 기본 렌더링
          <View style={registerStyles.CheckTextView}>
            <Text style={[checkTextStyle, { color: theme.disableTextGray }]}>
              영문, 숫자 포함 7-12자
            </Text>
          </View>
        )}
      </View>

<<<<<<< HEAD
      {isFocused && (
        <KeyboardButtonComponent
          onPress={handleDuplicationCheck}
          buttonStyle={buttonStyle}
          disabled={!isValidId}
          buttonTextStyle={duplicateTextStyle}
          text="중복체크"
=======
      <View style={registerStyles.registerButtonView}>
        <OnboardingButton
          onPress={() => navigation.navigate('PasswordScreen')}
          backgroundColor={disabledCheck ? theme.pink : theme.disableButtonGray}
          textColor={disabledCheck ? theme.white : theme.disableTextGray}
          text="다음"
>>>>>>> main
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default IdInput;

const styles = StyleSheet.create({
  idInput: {
    width: '75%',
    fontSize: 20,
    fontFamily: theme.bold,
    color: theme.black,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  duplicateButton: {
    backgroundColor: theme.disableButtonGray,
    width: 75,
    height: 30,
    borderRadius: 999,
    justifyContent: 'center',
  },
  duplicateText: {
    color: theme.disableTextGray,
    fontFamily: theme.medium,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 14,
  },
});
