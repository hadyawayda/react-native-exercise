import { Button, StyleSheet, Text, View } from 'react-native';
import { SettingsScreenProps } from '../types/screens';

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        title="Set Company ID"
        onPress={() => navigation.navigate('SetCompanyID')}
      />
      <Button
        title="Pick Voice"
        onPress={() => navigation.navigate('PickVoice')}
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

export default SettingsScreen;
