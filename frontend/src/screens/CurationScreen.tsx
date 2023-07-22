import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Header from '@components/Common/Header';
import Card, { data } from '@components/Curation/Card';
import { theme } from 'styles/theme';
import Blog from '@components/Curation/Blog';

const CurationScreen = () => {
  const [blogPressed, setBlogPressed] = useState(false);
  return blogPressed ? (
    <Blog setBlogPressed={setBlogPressed} />
  ) : (
    <SafeAreaView style={styles.container}>
      <Header title="큐레이션" notBack />

      <ScrollView showsVerticalScrollIndicator={false} style={styles.marginTop}>
        {data.map((item, index) => (
          <Card
            setBlogPressed={setBlogPressed}
            key={index}
            image={item.image}
            tag={item.tag}
            headText={item.headText}
            subText={item.subText}
            bottom={index === data.length - 1 ? 50 : 20} // 마지막 카드는 marginBottom을 50으로 설정
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CurationScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.white,
  },
  marginTop: {
    marginTop: 30,
  },
});
