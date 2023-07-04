import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Back from '@assets/images/common/backArrow.svg';
import { theme } from 'styles/theme';

const Header = () => {
  return (
    <View style={{ marginTop: 20, justifyContent: 'center' }}>
      {/* svg pressed = 이전 화면으로 navigation.back() */}
      <Back style={{ position: 'absolute', left: 20 }} />
      <Text style={styles.headerText}>회원가입</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 14,
    fontFamily: theme.bold,
    color: theme.black,
    textAlign: 'center',
  },
});
