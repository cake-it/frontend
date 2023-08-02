import { Dispatch, SetStateAction } from 'react';

export interface MapSearchComponentProps {
  searchText: string;
  delta: number;
  setSearchText: Dispatch<SetStateAction<string>>;
  setRegion: Dispatch<SetStateAction<Region | null>>;
  setIsFocused: Dispatch<SetStateAction<boolean>>;
}

export type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};

// bottom sheet
export interface BottomSheetProps {
  isFocused: boolean;
  navigation: any;
}

export interface BottomSheetFullProps {
  onPress: () => void;
  navigation: () => void;
}
