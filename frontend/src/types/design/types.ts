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
