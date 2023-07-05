import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { theme } from 'styles/theme';
import { CheckBox } from 'types/design/types';

const Checkbox = ({ checked, onPress, label }: CheckBox) => {
  return (
    <TouchableOpacity
      activeOpacity={1.0}
      onPress={onPress}
      style={styles.buttonContainer}
    >
      <View style={styles.checkboxContainer}>
        <View
          style={[
            styles.onCheck,
            { backgroundColor: checked ? theme.pink : '#E1E1E1' },
          ]}
        />
      </View>
      <Text style={styles.titleText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  checkboxContainer: {
    width: 20,
    height: 20,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  onCheck: {
    width: '60%',
    height: '60%',
    borderRadius: 12,
  },
  titleText: {
    color: '#404040',
    fontFamily: theme.regular,
    fontSize: 14,
    marginLeft: 10,
  },
});
