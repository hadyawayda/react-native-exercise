import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';
import { MainStackParamList } from '../types/navigation';

const Stack = createStackNavigator<MainStackParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen
        name="VoicebotScreen"
        component={VoicebotScreen}
        options={{ presentation: 'modal', headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
