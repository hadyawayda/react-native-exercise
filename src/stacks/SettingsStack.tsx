import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import SetIDScreen from '../screens/SetIDScreen';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';

const SettingsStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="SetIDScreen" component={SetIDScreen} />
      <Stack.Screen name="EnterIDScreen" component={EnterIDScreen} />
      <Stack.Screen name="PickVoiceScreen" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
