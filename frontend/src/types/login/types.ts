import { Dispatch, SetStateAction } from 'react';

export interface LoginScreenProps {
  setDisabled: Dispatch<SetStateAction<boolean>>;
  handleConfirmLogin: () => void;
  loginError: boolean;
  setLoginError: Dispatch<SetStateAction<boolean>>;
  disabled: boolean;
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
  userPassword: string;
  setUserPassword: Dispatch<SetStateAction<string>>;
}
