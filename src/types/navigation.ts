export type OnboardingStackParamList = {
  WelcomeScreen: undefined;
  EnterIDScreen: { isUpdateMode: boolean };
  PickVoiceScreen: { isUpdateMode: boolean };
  MainStack: { screen: keyof MainStackParamList };
};

export type MainStackParamList = {
  MainScreen: undefined;
  VoicebotScreen: undefined;
  SettingsStack: { screen: keyof SettingsStackParamList };
};

export type SettingsStackParamList = {
  SettingsScreen: undefined;
  SetIDScreen: undefined;
  EnterIDScreen: { isUpdateMode: boolean };
  PickVoiceScreen: { isUpdateMode: boolean };
};

export type RootStackParamList = {
  OnboardingStack: { screen: keyof OnboardingStackParamList };
  MainStack: { screen: keyof MainStackParamList };
};
