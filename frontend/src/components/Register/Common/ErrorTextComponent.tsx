import { Text, View } from 'react-native';
import React from 'react';
import { registerStyles } from 'styles/register/styles';
import Fail from '@assets/images/register/fail.svg';

const ErrorTextComponent = ({
  errorText,
  svg,
}: {
  errorText: string;
  svg?: boolean;
}) => {
  return (
    <View
      style={[
        registerStyles.CheckTextView,
        { justifyContent: 'center', marginTop: 35 },
      ]}
    >
      <Text style={[registerStyles.checkText, { color: '#FF8080' }]}>
        {errorText}
      </Text>
      {svg && <Fail />}
    </View>
  );
};

export default ErrorTextComponent;
