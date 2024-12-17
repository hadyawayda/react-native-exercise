import { Button, StyleSheet, View } from 'react-native';
import { SettingsScreenProps } from '../types/screens';

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Set Company ID"
        onPress={() => navigation.navigate('SetIDScreen')}
      />
      <Button
        title="Pick Voice"
        onPress={() =>
          navigation.navigate('PickVoiceScreen', { isUpdateMode: true })
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
    gap: 30,
  },
});

export default SettingsScreen;
