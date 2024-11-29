import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList, OnboardingStackParamList} from './navigation';

export type WelcomeScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'Welcome'>;
};
export type PickVoiceScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'PickVoice'>;
};
export type EnterCompanyIDScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'EnterCompanyID'>;
};
export type VoicebotScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Voicebot'>;
};
export type MainScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>;
};