import { ButtonProps, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { KeyboardButtonProps } from 'types/design/types';

const KeyboardButtonComponent = ({
  disabled,
  onPress,
  buttonStyle,
  buttonTextStyle,
  text,
}: KeyboardButtonProps) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={1.0}
        disabled={disabled}
        onPress={onPress}
        style={buttonStyle}
      >
        <Text style={buttonTextStyle}>{text}</Text>
      </TouchableOpacity>
    </>
  );
};

export default KeyboardButtonComponent;
