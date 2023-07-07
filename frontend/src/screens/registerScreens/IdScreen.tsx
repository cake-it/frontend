import React from 'react';
import Layout from '@components/Register/Layout';
import IdInput from '@components/Register/IdInput';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'IdScreen'>;

const IdScreen = ({ navigation, route }: Props) => {
  return (
    <Layout>
      <IdInput navigation={navigation} route={route} />
    </Layout>
  );
};

export default IdScreen;
