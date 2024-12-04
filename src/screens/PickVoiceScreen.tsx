import { Picker } from '@react-native-picker/picker';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setVoicePreference } from '../store/userPreferences/slice';
import { PickVoiceScreenProps } from '../types/screens';

const PickVoiceScreen = ({ navigation }: PickVoiceScreenProps) => {
  const dispatch = useDispatch();

  const voice = useSelector((state: RootState) => state.voicePreference.voice);

  const handleDismiss = () => {
    dispatch(setVoicePreference(voice));
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pick a Voice</Text>
      <Picker
        selectedValue={voice}
        onValueChange={itemValue => dispatch(setVoicePreference(itemValue))}
        style={styles.picker}>
        <Picker.Item label="Default" value="Default" />
        <Picker.Item label="Male Voice" value="Male" />
        <Picker.Item label="Female Voice" value="Female" />
      </Picker>
      <Button title="Dismiss" onPress={handleDismiss} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default PickVoiceScreen;
