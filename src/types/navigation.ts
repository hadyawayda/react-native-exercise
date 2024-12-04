export type OnboardingStackParamList = {
  Welcome: undefined;
  EnterID: undefined;
  PickVoice: undefined;
  MainScreen: undefined;
};

export type MainStackParamList = {
  MainScreen: undefined;
  Voicebot: undefined;
  SettingsStack: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
  SetCompanyID: undefined;
  EnterCompanyID: undefined;
  PickVoice: undefined;
};

export type NavigationStacks = {
  OnboardingStack: OnboardingStackParamList;
  MainStack: MainStackParamList;
  SettingsStack: SettingsStackParamList;
};
