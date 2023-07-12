import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import Back from '@assets/images/custom/customX.svg';
import Save from '@assets/images/custom/customSave.svg';

// 버튼 기능 구현 전
const Header = () => {
  return (
    <View style={styles.headerView}>
      <TouchableWithoutFeedback>
        <Back style={[styles.button, { marginLeft: 10 }]} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback>
        <Save style={[styles.button, { marginRight: 10 }]} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerView: {
    paddingTop: 50,
    marginBottom: -28,
    justifyContent: 'space-between',
    flexDirection: 'row',
    zIndex: 10,
  },
  button: {
    shadowColor: '#797979',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
  },
});
