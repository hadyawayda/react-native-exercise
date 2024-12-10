import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MainScreen from '../screens/MainScreen';
import { OnboardingStackParamList } from '../types/navigation';
// import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="EnterIDScreen" component={EnterIDScreen} />
      <Stack.Screen name="PickVoiceScreen" component={PickVoiceScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
      {/* <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ presentation: 'modal', headerShown: false }}/> */}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
