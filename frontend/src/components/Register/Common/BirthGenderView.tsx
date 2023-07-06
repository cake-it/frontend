import React from 'react';
import Dash from '@assets/images/register/dash.svg';
import Dots from '@assets/images/register/dots.svg';
import { registerStyles } from 'styles/register/styles';
import { Text, View } from 'react-native';

const BirthGenderView = () => {
  // 상태관리로 받아오기

  const birth = '990910';
  const gender = '1';

  return (
    <View style={registerStyles.marginTop}>
      <Text style={registerStyles.infoText}>생년월일/성별</Text>
      <View style={registerStyles.inputFlex}>
        <View style={[registerStyles.idView, { width: '40%' }]}>
          {/* 생년월일/성별 불러오기 */}
          <Text style={registerStyles.idText}>{birth}</Text>
        </View>
        <Dash />
        <View style={[registerStyles.idView, { width: '10%' }]}>
          {/* 생년월일/성별 불러오기 */}
          <Text style={[registerStyles.idText, { textAlign: 'center' }]}>
            {gender}
          </Text>
        </View>
        <Dots />
      </View>
    </View>
  );
};

export default BirthGenderView;
