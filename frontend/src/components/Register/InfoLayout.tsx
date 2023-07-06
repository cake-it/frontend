import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Checkbox from '@components/design/CheckBox';
import BirthGenderView from './Common/BirthGenderView';
import Password from '@assets/images/register/password.svg';
import IdView from './Common/IdView';
import { registerStyles } from 'styles/register/styles';
import { checkBoxOptions } from 'utils/textRenderData/register';

const InfoLayout = ({ index }: { index: number }) => {
  const checkedIndex = 0;

  return (
    <>
      {index === 4 && (
        <>
          <Text style={registerStyles.infoText}>서비스 이용목적</Text>
          <View style={styles.checkBoxContainer}>
            {checkBoxOptions.map((option, index) => (
              <Checkbox
                key={index}
                label={option}
                checked={checkedIndex === index}
              />
            ))}
          </View>
        </>
      )}

      {index >= 3 && <BirthGenderView />}

      {index >= 2 && <Password style={registerStyles.marginTop} />}

      {index >= 1 && <IdView />}
    </>
  );
};

export default InfoLayout;

const styles = StyleSheet.create({
  checkBoxContainer: {
    width: '100%',
    backgroundColor: '#FAFAFA',
    borderRadius: 10,
    padding: 20,
    gap: 18,
  },
});
