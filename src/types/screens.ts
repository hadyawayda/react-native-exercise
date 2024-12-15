import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import {
  MainStackParamList,
  OnboardingStackParamList,
  SettingsStackParamList,
} from './navigation';

export type SplashScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'SplashScreen'>;
};
export type WelcomeScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'WelcomeScreen'>;
};
export type PickVoiceScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'PickVoiceScreen'>;
  route: RouteProp<OnboardingStackParamList, 'PickVoiceScreen'>;
};
export type EnterCompanyIDScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'EnterIDScreen'>;
  route: RouteProp<OnboardingStackParamList, 'EnterIDScreen'>;
};
export type VoicebotScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'VoicebotScreen'>;
};
export type MainScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'MainScreen'>;
};
export type SettingsScreenProps = {
  navigation: StackNavigationProp<SettingsStackParamList, 'SettingsScreen'>;
};
export type SetCompanyIDScreenProps = {
  navigation: StackNavigationProp<SettingsStackParamList, 'SetIDScreen'>;
};
