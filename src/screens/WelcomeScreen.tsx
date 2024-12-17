import { Button, StyleSheet, Text, View } from 'react-native';
import { WelcomeScreenProps } from '../types/screens';

const WelcomeScreen = ({ navigation }: WelcomeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to ITXI Project</Text>
      <Button
        title="Get Started"
        onPress={() =>
          navigation.navigate('EnterIDScreen', { isUpdateMode: false })
        }
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
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 60,
  },
});

export default WelcomeScreen;
