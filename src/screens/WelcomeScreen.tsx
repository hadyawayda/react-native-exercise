import { Button, StyleSheet, Text, View } from 'react-native';
import { WelcomeScreenProps } from '../types/screens';

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  // navigation.reset({ index: 0, routes: [{ name: 'Main' }] });

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
