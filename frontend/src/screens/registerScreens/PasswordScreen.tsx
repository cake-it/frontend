import React from 'react';
import Layout from '@components/Register/Layout';
import PasswordInput from '@components/Register/PasswordInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'PasswordScreen'>;

const PasswordScreen = ({ navigation, route }: Props) => {
  return (
    <Layout>
      <PasswordInput navigation={navigation} route={route} />
    </Layout>
  );
};

export default PasswordScreen;
