import {createStackNavigator} from '@react-navigation/stack';
import EnterCompanyIDScreen from '../screens/EnterCompanyIDScreen';
import PickVoiceScreen from '../screens/PickVoiceScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

function OnboardingStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: true}}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="EnterCompanyID" component={EnterCompanyIDScreen} />
      <Stack.Screen name="PickVoice" component={PickVoiceScreen} />
    </Stack.Navigator>
  );
}

export default OnboardingStack;
