import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from 'styles/global';
import Header from '@components/Common/Header';
import ImageComponent from '@components/Custom/ImageComponent';
import CustomTabView from '@components/Custom/CustomTabView';

const CustomScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Header notBack title="커스텀 이미지 만들기" />

      <ImageComponent />

      <CustomTabView />
    </SafeAreaView>
  );
};

export default CustomScreen;

const styles = StyleSheet.create({});
