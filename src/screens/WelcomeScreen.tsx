import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {OnboardingStackParamList} from '../types/navigation';

type WelcomeScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'Welcome'>;
};

const WelcomeScreen = ({navigation}: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('EnterCompanyID')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
