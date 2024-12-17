import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
import { MainStackParamList } from '../types/navigation';
import SettingsStack from './SettingsStack';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'sans-serif-medium',
          fontSize: 24,
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 10,
          shadowOpacity: 10,
        },
      }}>
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          headerLeft: () => null,
          title: 'Main Screen',
        }}
      />
      <Stack.Screen
        name="VoicebotScreen"
        component={VoicebotScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
      {/* Is this even needed? (Yup, for deep liking) */}
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          presentation: 'modal',
          headerShown: false,
          headerLeft: () => null,
          title: 'Settings',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
