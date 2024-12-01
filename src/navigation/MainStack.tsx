import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
import SettingsStack from './SettingsStack';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="Voicebot"
        component={VoicebotScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />

      {/* Move Settings Stack out of the Main Stack*/}
      <Stack.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
