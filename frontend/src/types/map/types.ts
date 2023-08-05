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

export interface BottomSheetProps {
  isFocused: boolean;
  markerPressed: boolean;
  setSelectedMarkerIndex: Dispatch<SetStateAction<number>>;
  setMarkerPressed: Dispatch<SetStateAction<boolean>>;
  navigation: any;
}

export interface LocationButtonProps {
  onPress: () => void;
  markerPressed: boolean;
}

export interface Position {
  latitude: number;
  longitude: number;
}

export interface BottomSheetFullProps {
  onPress: () => void;
  navigation: () => void;
}
