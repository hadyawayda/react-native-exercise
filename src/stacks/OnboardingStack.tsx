import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import SplashScreen from '../screens/SplashScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { OnboardingStackParamList } from '../types/navigation';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerLeft: () => null,
          title: 'Welcome',
        }}
      />
      <Stack.Screen
        name="EnterIDScreen"
        component={EnterIDScreen}
        options={{
          headerLeft: () => null,
          title: 'Enter Company ID',
        }}
      />
      <Stack.Screen
        name="PickVoiceScreen"
        component={PickVoiceScreen}
        options={{
          headerLeft: () => null,
          title: 'Pick Voice',
        }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
