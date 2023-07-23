import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import React, { useState } from 'react';
import Card, { data } from '@components/Curation/Card';
import { theme } from 'styles/theme';
import Blog from '@components/Curation/Blog';

// 플랫폼별 분기처리
const cardBottom = Platform.OS === 'ios' ? 50 : 100;

const CurationScreen = () => {
  const [blogPressed, setBlogPressed] = useState(false);

  return blogPressed ? (
    <Blog setBlogPressed={setBlogPressed} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>큐레이션</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.marginTop}>
        {data.map((item, index) => (
          <Card
            setBlogPressed={setBlogPressed}
            key={index}
            image={item.image}
            tag={item.tag}
            headText={item.headText}
            subText={item.subText}
            bottom={index === data.length - 1 ? cardBottom : 20} // 마지막 카드는 marginBottom을 50으로 설정
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurationScreen;

// 플랫폼별 분기처리
const marginTop = Platform.OS === 'ios' ? 10 : 25;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.white,
  },
  marginTop: {
    marginTop: 25,
  },
  headerText: {
    color: theme.black,
    fontFamily: theme.bold,
    fontSize: 24,
    marginLeft: 18,
    marginTop: marginTop,
  },
});
