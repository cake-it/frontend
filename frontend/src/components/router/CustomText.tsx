import { Platform, Text } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import { LabelProps } from 'types/routes/bottomTabTypes';

const CustomText = ({ focused, label }: LabelProps) => {
  const labelStyle = {
    fontFamily: focused ? theme.bold : theme.regular,
    color: focused ? theme.pink : '#767676',
    fontSize: 10,
    marginBottom: Platform.OS === 'android' ? 17 : -5,
    bottom: 3,
  };

  return <Text style={labelStyle}>{label}</Text>;
};

export default CustomText;
