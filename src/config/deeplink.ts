import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['itxiapp://'],
  config: {
    screens: {
      OnboardingStack: {
        screens: {
          WelcomeScreen: '',
          EnterIDScreen: 'onboarding/enter-id',
          PickVoiceScreen: 'onboarding/pick-voice',
        },
      },
      MainStack: {
        screens: {
          MainScreen: '',
          SettingsStack: {
            screens: {
              SettingsScreen: 'settings',
              SetIDScreen: 'settings/set-company-id',
              EnterIDScreen: 'settings/enter-id',
              PickVoiceScreen: 'settings/pick-voice',
            },
          },
        },
      },
    },
  },
};
