export interface OnboardingButtonProps {
  text: string;
  textColor: string;
  borderColor?: string;
  backgroundColor: string;
  disabled?: boolean;
  onPress?: () => void;
}
