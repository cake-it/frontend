import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';
import Profile from '@components/MyPage/Profile';
import MyPageList from '@components/MyPage/MyPageList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StackParamList } from 'types/routes/types';
export type Props = NativeStackScreenProps<StackParamList, 'MyPageScreen'>;

const MyPageScreen = ({ navigation }: Props) => {
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>마이페이지</Text>

        <Profile />
      </View>

      <View style={styles.splitLine} />

      <MyPageList navigation={navigation} />
    </SafeAreaView>
  );
};

export default MyPageScreen;

const marginTop = Platform.OS === 'ios' ? 10 : 25;

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: 18,
    marginRight: 18,
  },
  headerText: {
    color: theme.black,
    fontFamily: theme.bold,
    fontSize: 24,
    marginTop: marginTop,
  },
  splitLine: {
    borderWidth: 5,
    borderColor: '#F6F6F6',
    marginTop: 25,
  },
});
