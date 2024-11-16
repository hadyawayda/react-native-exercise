import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';
import VoicebotScreen from '../screens/VoicebotScreen';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen
        name="Voicebot"
        component={VoicebotScreen}
        options={{presentation: 'modal', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
