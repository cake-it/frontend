import React from 'react';
import Layout from '@components/Register/Layout';
import ProfileSelect from '@components/Register/ProfileSelect';

const ProfileScreen = () => {
  return (
    <Layout checked>
      <ProfileSelect />
    </Layout>
  );
};

export default ProfileScreen;
