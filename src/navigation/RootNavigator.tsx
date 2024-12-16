import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { linking } from '../config/deeplink';
import { useInitialDeepLink } from '../hooks/useInitialDeepLink';
import MainStack from '../stacks/MainStack';
import OnboardingStack from '../stacks/OnboardingStack';
import SettingsStack from '../stacks/SettingsStack';
import { RootStackParamList } from '../types/navigation';
import { resetNavigationForDeepLink } from '../utils/resetNavigationForDeepLink';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

const RootStack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  const [navigationReady, setNavigationReady] = useState(false);
  const { isAppReady, initialDeepLink } = useInitialDeepLink();

  useEffect(() => {
    if (isAppReady && initialDeepLink && navigationReady) {
      resetNavigationForDeepLink(initialDeepLink);
    }
  }, [isAppReady, initialDeepLink, navigationReady]);

  if (!isAppReady) {
    return null;
  }

  return (
    <NavigationContainer
      ref={navigationRef}
      linking={linking}
      onReady={() => setNavigationReady(true)}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="OnboardingStack" component={OnboardingStack} />
        <RootStack.Screen name="MainStack" component={MainStack} />
        <RootStack.Screen
          name="SettingsStack"
          component={SettingsStack}
          options={{ presentation: 'modal', headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
