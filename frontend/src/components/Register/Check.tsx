import React, { useState } from 'react';
import Checkbox from '@components/design/CheckBox';
import { StyleSheet, Text, View } from 'react-native';
import { registerStyles } from 'styles/register/styles';
import { checkBoxOptions } from 'utils/textRenderData/register';
import { Props } from '@screens/registerScreens/CheckScreen';
import OnboardingButton from '@components/Common/OnboardingButton';
import { theme } from 'styles/theme';
import { globalStyles } from 'styles/global';

const Check = ({ navigation }: Props) => {
  const [checkedIndex, setCheckedIndex] = useState(-1);
  const check = checkedIndex > -1;

  // 체크박스 선택 하나만
  const handleCheck = (index: number) => {
    setCheckedIndex(index);
  };

  return (
    <View style={globalStyles.buttonFlex}>
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
      </View>

      <View style={registerStyles.registerButtonView}>
        <OnboardingButton
          onPress={() => navigation.navigate('ProfileScreen')}
          backgroundColor={check ? theme.pink : theme.disableButtonGray}
          textColor={check ? theme.white : theme.disableTextGray}
          text="다음"
        />
      </View>
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
