import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { registerStyles } from 'styles/register/styles';
import Effect from '@assets/images/register/effect.svg';
import ProfileComponent from './ProfileComponent';
import { theme } from 'styles/theme';

const WelcomeComponent = () => {
  const scaleValue = useRef(new Animated.Value(0)).current;
  const windowWidth = Dimensions.get('window').width;

  const Title = [registerStyles.inputLabel, { marginBottom: 7, marginTop: 20 }];

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.elastic(1),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={styles.content}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 85,
          left: windowWidth / 2 - 170,
          transform: [{ scale: scaleValue }],
        }}
      >
        <Effect />
      </Animated.View>

      <ProfileComponent />
      <Text style={styles.nicknameText}>행복한 오징어</Text>

      <View style={styles.textView}>
        <Text style={Title}>케이크에크에 오신것을</Text>
        <Text style={registerStyles.inputLabel}>환영합니다.</Text>
      </View>
    </View>
  );
};

export default WelcomeComponent;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    alignItems: 'center',
    marginTop: 25,
  },
  nicknameText: {
    fontSize: 16,
    fontFamily: theme.bold,
    marginTop: 14,
    color: '#373737',
  },
});
