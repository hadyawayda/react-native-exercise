import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['itxiapp://'],
  config: {
    screens: {
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
