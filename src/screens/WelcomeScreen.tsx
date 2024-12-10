import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { WelcomeScreenProps } from '../types/screens';

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to ITXI Project</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('EnterIDScreen')}
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
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
});

export default WelcomeScreen;
