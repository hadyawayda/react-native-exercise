import { LinkingOptions, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import SplashScreen from '../screens/SplashScreen';
import { MainStackParamList } from '../types/navigation';
import MainStack from '../stacks/MainStack';
import OnboardingStack from '../stacks/OnboardingStack';
import SettingsStack from '../stacks/SettingsStack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const linking: LinkingOptions<MainStackParamList> = {
    prefixes: ['itxiapp://'],
    config: {
      screens: {
        MainScreen: {
          screens: {
            SettingsStack: {
              screens: {
                SetCompanyID: 'set-company-id',
              },
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {/* Move the splash screen from the root navigator to the onboarding stack */}
        {showSplash ? (
          <RootStack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <>
            <RootStack.Screen
              name="OnboardingStack"
              component={OnboardingStack}
            />
            <RootStack.Screen name="MainStack" component={MainStack} />
            <RootStack.Screen
              name="SettingsStack"
              component={SettingsStack}
              options={{ presentation: 'modal', headerShown: false }}
            />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
