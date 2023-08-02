// bottom navigation
export type BottomTabList = {
  MapSearchScreen: undefined;
  ReservationScreen: undefined;
  CurationScreen: undefined;
  CustomScreen: undefined;
  MyPageRoute: undefined;
};

export enum BottomScreens {
  BottomMapSearchScreen = 'MapSearchScreen',
  BottomReservationScreen = 'ReservationScreen',
  BottomCurationScreen = 'CurationScreen',
  BottomCustomScreen = 'CustomScreen',
  BottomMyPageRoute = 'MyPageRoute',
}

// custom label
export interface LabelProps {
  focused: boolean;
  label: string;
}
