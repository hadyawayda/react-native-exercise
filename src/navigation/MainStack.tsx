import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
import SettingsStack from './SettingsStack';

function MainStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="Voicebot"
        component={VoicebotScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
