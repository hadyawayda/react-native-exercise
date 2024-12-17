import { createStackNavigator } from '@react-navigation/stack';
import EnterIDScreen from '../screens/EnterIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import SetIDScreen from '../screens/SetIDScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { SettingsStackParamList } from '../types/navigation';

const SettingsStack = () => {
  const Stack = createStackNavigator<SettingsStackParamList>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerLeft: () => null,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name="SetIDScreen"
        component={SetIDScreen}
        options={{
          headerLeft: () => null,
          title: 'Set Company ID',
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

export default SettingsStack;
