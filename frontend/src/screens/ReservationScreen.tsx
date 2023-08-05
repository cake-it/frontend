import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from 'styles/global';
import { theme } from 'styles/theme';
import Icon from '@assets/images/reservation/index.svg';

// 예약 화면은 ver1에서 구현하지 않고 ver2에서 구현 예정인 화면 & 기능

const ReservationScreen = () => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={styles.headerText}>예약</Text>

      <View style={styles.centeredContainer}>
        <Icon />
        <Text style={styles.messageText}>아직 준비 중인 화면입니다.</Text>
      </View>
    </SafeAreaView>
  );
};

export default ReservationScreen;

// 플랫폼별 분기처리
const marginTop = Platform.OS === 'ios' ? 10 : 25;

const styles = StyleSheet.create({
  headerText: {
    color: theme.black,
    fontFamily: theme.bold,
    fontSize: 24,
    marginLeft: 18,
    marginTop: marginTop,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
  messageText: {
    color: '#797979',
    fontSize: 16,
    fontFamily: theme.medium,
  },
});
