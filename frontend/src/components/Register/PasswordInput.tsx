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

const PasswordInput = () => {
  const [userPassword, setUserPassword] = useState('');

  const inputs = useRef([]);

  const focusNextInput = (index) => {
    if (index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  const focusPreviousInput = (index) => {
    if (index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleTextChange = (text, index) => {
    setUserPassword(text);
    if (text === '') {
      focusPreviousInput(index);
    } else {
      focusNextInput(index);
    }
  };

  console.log(userPassword);

  useEffect(() => {
    // 페이지가 렌더링되면 첫 번째 input에 포커스를 설정합니다.
    inputs.current[0].focus();
  }, []);

  // 스타일 분기 코드
  const inputStyle = [
    styles.passwordInput,
    userPassword !== '' && {
      borderBottomColor: theme.pink,
      borderBottomWidth: 2,
    },
  ];

  return (
    <KeyboardAvoidingView style={globalStyles.buttonFlex} behavior="padding">
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>비밀번호를 만들어 주세요</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          {[...Array(6)].map((_, index) => (
            <TextInput
              key={index}
              style={inputStyle}
              maxLength={1}
              secureTextEntry
              keyboardType="number-pad"
              onChangeText={(text) => handleTextChange(text, index)}
              ref={(input) => (inputs.current[index] = input)}
              onSubmitEditing={() => focusNextInput(index)}
            />
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default PasswordInput;

const styles = StyleSheet.create({
  passwordInput: {
    width: '9%',
    fontSize: 50,
    fontFamily: theme.bold,
    color: theme.black,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    alignSelf: 'center',
  },
});
