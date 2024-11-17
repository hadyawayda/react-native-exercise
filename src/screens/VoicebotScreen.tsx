import { Button, StyleSheet, Text, View } from 'react-native';
import { VoicebotScreenProps } from '../types/screens';

const VoicebotScreen = ({navigation}: VoicebotScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voicebot Screen</Text>
      <Button title="Dismiss" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default VoicebotScreen;
