import { Dispatch, SetStateAction } from 'react';
import { GestureResponderEvent } from 'react-native';

// Icon Type
type IconType = 'setting' | 'heart' | 'version' | JSX.Element;
export interface ListItemProps {
  icon: IconType;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}

// Modal Type
export interface MyPageModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  modalType: string;
}
