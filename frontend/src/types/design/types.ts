import { ReactNode } from 'react';

// onboarding button
export interface OnboardingButtonProps {
  text: string;
  textColor: string;
  borderColor?: string;
  backgroundColor: string;
  disabled?: boolean;
  onPress?: () => void;
  bottomSheet?: boolean;
}

// checkbox
export interface CheckBox {
  label: string;
  checked: boolean;
  onPress?: () => void;
}

// layout
export interface RegisterLayoutProps {
  children: ReactNode;
  profile?: boolean; // profile is checked
}

// keyboard button
export interface KeyboardButtonProps {
  disabled?: boolean;
  onPress: () => void;
  buttonStyle: any;
  buttonTextStyle: any;
  text: string;
}

// Header
export interface CommonHeaderProps {
  title: string;
  notBack?: boolean;
  bottom?: boolean;
  onPress?: () => void;
}
