import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import { OnboardingStackParamList } from '../types/navigation';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="EnterID" component={EnterIDScreen} />
      <Stack.Screen name="PickVoice" component={PickVoiceScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
