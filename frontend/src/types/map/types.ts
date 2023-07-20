import { Dispatch, SetStateAction } from 'react';

export interface MapSearchComponentProps {
  searchText: string;
  delta: number;
  setSearchText: Dispatch<SetStateAction<string>>;
  setRegion: Dispatch<SetStateAction<Region | null>>;
}

export type Region = {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
};
