import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Layout from '@components/Register/Layout';
import PasswordInput from '@components/Register/PasswordInput';

const PasswordConfirmScreen = () => {
  return (
    <Layout>
      <PasswordInput confirm />
    </Layout>
  );
};

export default PasswordConfirmScreen;

const styles = StyleSheet.create({});
