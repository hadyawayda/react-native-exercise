import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyID } from '../store/companyDataSlice/slice';
import { RootState } from '../store/store';
import { EnterCompanyIDScreenProps } from '../types/screens';

const EnterCompanyIDScreen = ({ navigation }: EnterCompanyIDScreenProps) => {
  const dispatch = useDispatch();

  const storedCompanyID = useSelector(
    (state: RootState) => state.companyData.companyID,
  );

  const handleInputChange = (text: string) => {
    dispatch(setCompanyID(text));
  };

  const handleContinue = () => {
    if (storedCompanyID.trim() !== '') {
      navigation.navigate('PickVoice');
    } else {
      Alert.alert('Please enter a valid Company ID.');
      return;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Company ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Company ID"
        value={storedCompanyID}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={storedCompanyID.trim() === ''}
      />
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: '100%',
    padding: 10,
    marginBottom: 20,
  },
});

export default EnterCompanyIDScreen;
