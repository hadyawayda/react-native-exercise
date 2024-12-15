import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useEffect, useState } from 'react';
import { linking } from '../config/deeplink';
import SplashScreen from '../screens/SplashScreen';
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

  return (
    <NavigationContainer
      linking={linking}
      onStateChange={state =>
        console.log('Current state:', JSON.stringify(state))
      }>
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
