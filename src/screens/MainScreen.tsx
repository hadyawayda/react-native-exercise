import { Button, StyleSheet, View } from 'react-native';
import { MainScreenProps } from '../types/screens';

const MainScreen = ({ navigation }: MainScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Settings"
        onPress={() =>
          navigation.navigate('SettingsStack', { screen: 'SettingsScreen' })
        }
      />
      <Button
        title="Launch Voicebot"
        onPress={() => navigation.navigate('VoicebotScreen')}
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
});

export default MainScreen;
