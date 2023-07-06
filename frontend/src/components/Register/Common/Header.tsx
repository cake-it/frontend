import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from '@assets/images/common/backArrow.svg';
import { theme } from 'styles/theme';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Back />
      </TouchableOpacity>
      <Text style={styles.headerText}>회원가입</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  headerText: {
    fontSize: 14,
    fontFamily: theme.bold,
    color: theme.black,
    textAlign: 'center',
  },
});
