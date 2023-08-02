import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { theme } from 'styles/theme';
import Arrow from '@assets/images/common/rightArrow.svg';
import { ListItemProps } from 'types/myPage/types';

const MyPageListItem = ({ icon, title, subtitle, onPress }: ListItemProps) => {
  return (
    <View style={styles.textFlex}>
      {icon}
      <Text style={styles.listText}>{title}</Text>
      {subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}

      {/* navigation 되는 화살표 버튼 */}
      {title !== '현재 버전' && (
        <TouchableOpacity
          activeOpacity={1.0}
          hitSlop={styles.hit}
          style={styles.icon}
          onPress={onPress}
        >
          <Arrow />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MyPageListItem;

const styles = StyleSheet.create({
  listText: {
    fontSize: 14,
    fontFamily: theme.regular,
    color: theme.black,
  },
  textFlex: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  icon: {
    position: 'absolute',
    right: 5,
  },
  subtitleText: {
    color: '#C1C1C1',
  },
  hit: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10,
  },
});
