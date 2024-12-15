import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { linking } from '../config/deeplink';
import MainStack from '../stacks/MainStack';
import OnboardingStack from '../stacks/OnboardingStack';
import SettingsStack from '../stacks/SettingsStack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const handleDeepLink = () => {
    
  };

  return (
    <NavigationContainer linking={linking} onStateChange={handleDeepLink}>
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
