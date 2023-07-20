import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from 'styles/theme';
import { useNavigation } from '@react-navigation/native';
import Back from '@assets/images/common/backArrow.svg';
import BottomArrow from '@assets/images/map/bottomArrow.svg';

const Header = ({
  title,
  notBack,
  bottom,
}: {
  title: string;
  notBack?: boolean;
  bottom?: boolean;
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      <TouchableOpacity
        activeOpacity={1.0}
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        {bottom ? <BottomArrow /> : <Back />}
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
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
