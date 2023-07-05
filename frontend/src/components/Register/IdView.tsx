import React from 'react';
import { Text, View } from 'react-native';
import { registerStyles } from 'styles/register/styles';

const IdView = ({ id }: { id: string }) => {
  return (
    <View style={registerStyles.marginTop}>
      <Text style={registerStyles.infoText}>아이디</Text>
      <View style={registerStyles.idView}>
        {/* id 불러오기 */}
        <Text style={registerStyles.idText}>{id}</Text>
      </View>
    </View>
  );
};

export default IdView;
