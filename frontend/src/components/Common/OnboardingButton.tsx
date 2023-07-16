import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { OnboardingButtonProps } from 'types/design/types';

const OnboardingButton = ({
  text,
  textColor,
  borderColor,
  backgroundColor,
  disabled,
  onPress,
}: OnboardingButtonProps) => {
  const buttonStyle = {
    ...styles.button,
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    borderWidth: borderColor ? 1 : undefined,
  };

  const buttonText = {
    ...styles.buttonText,
    color: textColor,
  };

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={buttonStyle}>
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OnboardingButton;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
});
