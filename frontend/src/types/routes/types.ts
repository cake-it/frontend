// main route
export enum RouteScreens {
  OnboardingScreen = 'OnboardingScreen',

  RegisterRoute = 'RegisterRoute',

  LoginScreen = 'LoginScreen',
  CustomScreen = 'CustomScreen',

  MapRoute = 'MapRoute',
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

// Map routes
export enum MapScreens {
  MapSearchScreen = 'MapSearchScreen',
  ShopInfoScreen = 'ShopInfoScreen',
}

// 필요한 파라미터가 없는 상태
export type StackParamList = {
  // route
  RegisterRoute: undefined;
  MapRoute: undefined;

  // Screen
  OnboardingScreen: undefined;
  IdScreen: undefined;
  PasswordScreen: undefined;
  PasswordConfirmScreen: undefined;
  BirthGenderScreen: undefined;
  CheckScreen: undefined;
  ProfileScreen: undefined;
  WelcomeScreen: undefined;

  LoginScreen: undefined;

  CustomScreen: undefined;

  MapSearchScreen: undefined;
  ShopInfoScreen: undefined;
};
