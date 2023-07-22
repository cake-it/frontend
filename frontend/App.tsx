/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import MainRoute from 'routes/MainRoute';

const App = () => {
  // 다크모드 UI가 없기 때문에 ios status bar 고정 설정
  useEffect(() => {
    StatusBar.setBarStyle(Platform.OS === 'ios' ? 'dark-content' : 'default');
  }, []);

  return <MainRoute />;
};

export default App;
