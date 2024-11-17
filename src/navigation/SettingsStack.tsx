import { createStackNavigator } from '@react-navigation/stack';
import SettingsScreen from '../screens/SettingsScreen';
import SetCompanyIDScreen from '../screens/SetCompanyIDScreen';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';

function SettingsStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="SetCompanyID" component={SetCompanyIDScreen} />
      <Stack.Screen name="EnterCompanyID" component={EnterCompanyIDScreen} />
      <Stack.Screen name="PickVoice" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
}

export default SettingsStack;
