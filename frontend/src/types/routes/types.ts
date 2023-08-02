// main route
export enum RouteScreens {
  OnboardingScreen = 'OnboardingScreen',

  RegisterRoute = 'RegisterRoute',
  MyPageRoute = 'MyPageRoute',

  LoginScreen = 'LoginScreen',
  CustomScreen = 'CustomScreen',

  BottomTabRoute = 'BottomTabRoute',
  MapSearchScreen = 'MapSearchScreen',

  CurationScreen = 'CurationScreen',
}

// Register routes
export enum RegisterScreens {
  IdScreen = 'IdScreen',
  PasswordScreen = 'PasswordScreen',
  PasswordConfirmScreen = 'PasswordConfirmScreen',
  BirthGenderScreen = 'BirthGenderScreen',
  CheckScreen = 'CheckScreen',
  ProfileScreen = 'ProfileScreen',
  WelcomeScreen = 'WelcomeScreen',
}

// MyPage routes
export enum MyPageScreens {
  MyPageScreen = 'MyPageScreen',
  SettingScreen = 'SettingScreen',
  LikeListScreen = 'LikeListScreen',
}

// 필요한 파라미터가 없는 상태
export type StackParamList = {
  // route
  RegisterRoute: undefined;
  BottomTabRoute: undefined;
  MyPageRoute: undefined;

  // Screen
  OnboardingScreen: undefined;
  IdScreen: undefined;
  PasswordScreen: undefined;
  PasswordConfirmScreen: undefined;
  BirthGenderScreen: undefined;
  CheckScreen: undefined;
  ProfileScreen: undefined;
  WelcomeScreen: undefined;

  MyPageScreen: undefined;
  SettingScreen: undefined;
  LikeListScreen: undefined;

  LoginScreen: undefined;

  CustomScreen: undefined;

  MapSearchScreen: undefined;

  CurationScreen: undefined;
};
