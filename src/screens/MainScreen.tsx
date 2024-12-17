import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import SettingsIcon from '../components/SettingsIcon';
import { MainScreenProps } from '../types/screens';

const MainScreen = ({ navigation }: MainScreenProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.settingsButton}
        onPress={() =>
          navigation.navigate('SettingsStack', { screen: 'SettingsScreen' })
        }>
        <SettingsIcon />
      </TouchableOpacity>
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
    backgroundColor: 'lightgray',
  },
  settingsButton: {
    position: 'absolute',
    width: 50,
    height: 50,
    top: 10,
    left: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
