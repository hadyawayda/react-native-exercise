import { useEffect, useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCompanyID } from '../store/companyDataSlice/slice';
import { EnterCompanyIDScreenProps } from '../types/screens';
import { RootState } from '../store/store';

const EnterCompanyIDScreen = ({ navigation }: EnterCompanyIDScreenProps) => {
  const dispatch = useDispatch();
  const [localCompanyID, setLocalCompanyID] = useState('');

  const storedCompanyID = useSelector(
    (state: RootState) => state.companyData.companyID,
  );

  useEffect(() => {
    setLocalCompanyID(storedCompanyID || '');
  }, [storedCompanyID]);

  const handleInputChange = (text: string) => {
    setLocalCompanyID(text);
    dispatch(setCompanyID(text));
  };

  const handleContinue = () => {
    if (localCompanyID.trim() !== '') {
    } else {
      Alert.alert('Please enter a valid Company ID.');
      return;
    }
    navigation.navigate('PickVoice');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Company ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Company ID"
        value={localCompanyID}
        onChangeText={handleInputChange}
      />
      <Button
        title="Continue"
        onPress={handleContinue}
        disabled={localCompanyID.trim() === ''}
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
