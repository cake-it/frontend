import React, { useState } from 'react';
import LoginInput from '@components/Login/LoginInput';
import Layout from '@components/Login/Layout';

const LoginScreen = () => {
  const [disabled, setDisabled] = useState(true);
  const [loginError, setLoginError] = useState(false);
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // 로그인 API (임시 에러처리)
  const handleConfirmLogin = () => {
    userId === 'test123' && userPassword === '123456'
      ? setLoginError(false)
      : setLoginError(true);
  };

  return (
    <Layout onPress={handleConfirmLogin} disabled={disabled}>
      <LoginInput
        userId={userId}
        userPassword={userPassword}
        setUserId={setUserId}
        setUserPassword={setUserPassword}
        handleConfirmLogin={handleConfirmLogin}
        disabled={disabled}
        setDisabled={setDisabled}
        loginError={loginError}
        setLoginError={setLoginError}
      />
    </Layout>
  );
};

export default LoginScreen;
