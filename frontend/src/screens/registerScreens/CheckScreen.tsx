import React from 'react';
import Layout from '@components/Register/Layout';
import Check from '@components/Register/Check';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'CheckScreen'>;

const CheckScreen = ({ navigation, route }: Props) => {
  return (
    <Layout>
      <Check navigation={navigation} route={route} />
    </Layout>
  );
};

export default CheckScreen;
