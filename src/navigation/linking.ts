import { LinkingOptions } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

export const linking: LinkingOptions<RootStackParamList> = {
  prefixes: ['itxiapp://'],
  config: {
    screens: {
      MainStack: {
        screens: {
          SettingsStack: {
            screens: {
              SetIDScreen: 'settings/set-company-id',
            },
          },
        },
      },
    },
  },
};

// adb shell am start -W -a android.intent.action.VIEW -d "itxiapp://settings/set-company-id" com.itxiproject
