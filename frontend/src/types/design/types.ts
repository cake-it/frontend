import { ReactNode } from 'react';

// onboarding button
export interface OnboardingButtonProps {
  text: string;
  textColor: string;
  borderColor?: string;
  backgroundColor: string;
  disabled?: boolean;
  onPress?: () => void;
}

// checkbox
export interface CheckBox {
  label: string;
  checked: boolean;
  onPress?: () => void;
}

// layout
export interface LayoutProps {
  navigation?: any;
  route?: any;
  children: ReactNode;
  profile?: boolean; // profile is checked
  check?: boolean; // checkScreen is checked
}
