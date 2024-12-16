import { navigationRef } from '../navigation/RootNavigator';

export const resetNavigationForDeepLink = (deepLink: string) => {
  if (deepLink === 'settings/set-company-id') {
    navigationRef.reset({
      index: 0,
      routes: [
        {
          name: 'MainStack',
          state: {
            index: 1,
            routes: [
              { name: 'MainScreen' },
              {
                name: 'SettingsStack',
                state: {
                  index: 0,
                  routes: [{ name: 'SetIDScreen' }],
                },
              },
            ],
          },
        },
      ],
    });
  }
};
