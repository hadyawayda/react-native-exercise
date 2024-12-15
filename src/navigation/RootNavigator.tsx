import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { linking } from '../config/deeplink';
import MainStack from '../stacks/MainStack';
import OnboardingStack from '../stacks/OnboardingStack';
import SettingsStack from '../stacks/SettingsStack';

const RootStack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer
      linking={linking}
      onStateChange={state =>
        console.log('Current state:', JSON.stringify(state))
      }>
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
