import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { theme } from 'styles/theme';
import { useNavigation } from '@react-navigation/native';
import Back from '@assets/images/common/backArrow.svg';
import BottomArrow from '@assets/images/map/bottomArrow.svg';
import { CommonHeaderProps } from 'types/design/types';

const Header = ({ title, notBack, bottom, onPress }: CommonHeaderProps) => {
  // title : 기본 헤더 제목
  // notBack : true이면 뒤로 가는 interactions 없음
  // bottom : bottomSheet
  // 기본 action = 뒤로가기, onPress가 있으면? onPres

  const navigation = useNavigation();

  return (
    <View style={styles.headerView}>
      {!notBack && (
        <TouchableOpacity
          activeOpacity={1.0}
          style={styles.backButton}
          onPress={onPress ? onPress : () => navigation.goBack()}
        >
          {bottom ? <BottomArrow /> : <Back />}
        </TouchableOpacity>
      )}
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
