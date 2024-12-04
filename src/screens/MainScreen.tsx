import { Button, StyleSheet, Text, View } from 'react-native';
import { MainScreenProps } from '../types/screens';

const MainScreen = ({ navigation }: MainScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('SettingsStack')}
      />
      <Text style={styles.title}>Main Screen</Text>
      <Button
        title="Launch Voicebot"
        onPress={() => navigation.navigate('Voicebot')}
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

export default MainScreen;
