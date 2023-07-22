import { Platform, StyleSheet, Text, View } from 'react-native';
import React, { Dispatch, SetStateAction } from 'react';
import WebView from 'react-native-webview';
import Header from '@components/Common/Header';

// 플랫폼별 분기처리
const marginTop = Platform.OS === 'ios' ? 47 : 0;

// 임시 블로그 컴포넌트
const Blog = ({
  setBlogPressed,
}: {
  setBlogPressed: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <View style={{ flex: 1, marginTop: marginTop }}>
      <Header title="큐레이션" onPress={() => setBlogPressed(false)} />

      <WebView
        style={{ flex: 1, marginTop: 30 }}
        source={{ uri: 'https://velog.io/@hyeone999' }}
      />
    </View>
  );
};

export default Blog;

const styles = StyleSheet.create({});
