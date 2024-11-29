import { createStackNavigator } from '@react-navigation/stack';
import EnterCompanyIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainStack from './MainStack';

function OnboardingStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="EnterCompanyID" component={EnterCompanyIDScreen} />
      <Stack.Screen name="PickVoice" component={PickVoiceScreen} />
      <Stack.Screen
        name="MainStack"
        component={MainStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
