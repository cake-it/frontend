import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from 'styles/theme';
import Check from '@assets/images/common/check.svg';

// 토스트 메세지
export const toastConfig = {
  codeToast: () => (
    <View style={styles.toastView}>
      <Check style={{ marginLeft: 15 }} />
      <Text style={styles.toastText}>이미지를 저장했습니다 (b˙◁˙ )b</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  toastView: {
    height: 50,
    width: '93%',
    backgroundColor: theme.white,
    borderRadius: 8,
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  toastText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: theme.black,
  },
});
