export type OnboardingStackParamList = {
  WelcomeScreen: undefined;
  EnterIDScreen: { isUpdateMode: boolean };
  PickVoiceScreen: { isUpdateMode: boolean };
  MainScreen: undefined;
  MainStack: undefined;
};

export type MainStackParamList = {
  MainScreen: undefined;
  VoicebotScreen: undefined;
  SettingsScreen: undefined;
};

export type SettingsStackParamList = {
  SettingsScreen: undefined;
  SetIDScreen: undefined;
  EnterIDScreen: { isUpdateMode: boolean };
  PickVoiceScreen: { isUpdateMode: boolean };
};
