import BirthGenderInput from '@components/Register/BirthGenderInput';
import Layout from '@components/Register/Layout';
import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'BirthGenderScreen'>;

const BirthGenderScreen = ({ navigation, route }: Props) => {
  return (
    <Layout>
      <BirthGenderInput navigation={navigation} route={route} />
    </Layout>
  );
};

export default BirthGenderScreen;
