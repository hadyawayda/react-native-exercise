import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import { OnboardingStackParamList } from '../types/navigation';
import SplashScreen from '../screens/SplashScreen';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator<OnboardingStackParamList>();

const OnboardingStack = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      {showSplash ? (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="EnterIDScreen" component={EnterIDScreen} />
          <Stack.Screen name="PickVoiceScreen" component={PickVoiceScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
