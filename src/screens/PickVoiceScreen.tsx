import { Button, StyleSheet, Text, View } from 'react-native';
import { PickVoiceScreenProps } from '../types/screens';

const PickVoiceScreen = ({ navigation }: PickVoiceScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick a Voice</Text>
      <Button
        title="Dismiss"
        onPress={() => navigation.navigate('MainStack')}
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
    marginBottom: 20,
  },
});

export default PickVoiceScreen;
