import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="VoicebotScreen"
        component={VoicebotScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
      {/* <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ presentation: 'modal', headerShown: false }}
      /> */}
      {/* <Stack.Screen name="SettingsScreen" component={SettingsScreen} /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
