import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { OnboardingStackParamList } from '../types/navigation';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="EnterIDScreen" component={EnterIDScreen} />
      <Stack.Screen name="PickVoiceScreen" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
