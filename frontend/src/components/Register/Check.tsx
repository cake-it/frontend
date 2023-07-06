import React, { useState } from 'react';
import Checkbox from '@components/design/CheckBox';
import { Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { registerStyles } from 'styles/register/styles';
import { checkBoxOptions } from 'utils/textRenderData/register';
import InfoLayout from './InfoLayout';
import { Props } from '@screens/registerScreens/CheckScreen';

const Check = ({ navigation }: Props) => {
  const [checkedIndex, setCheckedIndex] = useState(-1);

  // 체크박스 선택 하나만
  // 체크박스 선택시 다음 페이지로 navigate
  const handleCheck = (index: number) => {
    setCheckedIndex(index);
    navigation.navigate('ProfileScreen');
  };

  // 안드로이드일 경우 scrollView 설정을 위해
  return Platform.OS === 'android' ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={registerStyles.inputContainer}>
        <Text style={registerStyles.inputLabel}>
          서비스 이용 목적을 알려주세요
        </Text>

        <View style={styles.checkBoxContainer}>
          {checkBoxOptions.map((option, index) => (
            <Checkbox
              key={index}
              label={option}
              onPress={() => handleCheck(index)}
              checked={checkedIndex === index}
            />
          ))}
        </View>

        <InfoLayout index={3} />

        <View style={{ marginBottom: 40 }} />
      </View>
    </ScrollView>
  ) : (
    <View style={registerStyles.inputContainer}>
      <Text style={registerStyles.inputLabel}>
        서비스 이용 목적을 알려주세요
      </Text>

      <View style={styles.checkBoxContainer}>
        {checkBoxOptions.map((option, index) => (
          <Checkbox
            key={index}
            label={option}
            onPress={() => handleCheck(index)}
            checked={checkedIndex === index}
          />
        ))}
      </View>

      <InfoLayout index={3} />
    </View>
  );
};

export default Check;

const styles = StyleSheet.create({
  checkBoxContainer: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 20,
    gap: 18,
  },
});
