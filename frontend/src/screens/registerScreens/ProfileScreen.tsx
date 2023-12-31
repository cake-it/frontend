import React from 'react';
import Layout from '@components/Register/Layout';
import ProfileSelect from '@components/Register/ProfileSelect';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'ProfileScreen'>;

const ProfileScreen = ({ navigation, route }: Props) => {
  return (
    <Layout profile>
      <ProfileSelect navigation={navigation} route={route} />
    </Layout>
  );
};

export default ProfileScreen;
