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
  bottomSheet,
}: OnboardingButtonProps) => {
  const buttonStyle = {
    ...styles.button,
    borderColor: borderColor,
    backgroundColor: backgroundColor,
    borderWidth: borderColor ? 1 : undefined,
    paddingVertical: bottomSheet ? 15 : 20,
  };

  const buttonText = {
    ...styles.buttonText,
    color: textColor,
  };

  return (
    <TouchableOpacity
      activeOpacity={1.0}
      onPress={onPress}
      disabled={disabled}
      style={buttonStyle}
    >
      <Text style={buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OnboardingButton;

const styles = StyleSheet.create({
  button: {
    width: '92%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Pretendard-Bold',
  },
});
