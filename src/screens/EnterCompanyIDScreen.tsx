import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {OnboardingStackParamList} from '../types/navigation';

type EnterCompanyIDScreenProps = {
  navigation: StackNavigationProp<OnboardingStackParamList, 'EnterCompanyID'>;
};

const EnterCompanyIDScreen: React.FC<EnterCompanyIDScreenProps> = ({
  navigation,
}) => {
  const [companyID, setCompanyID] = useState('');

  const handleContinue = () => {
    if (companyID.trim() !== '') {
      navigation.navigate('PickVoice');
    } else {
      alert('Please enter a valid Company ID.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Company ID</Text>
      <TextInput
        style={styles.input}
        placeholder="Company ID"
        value={companyID}
        onChangeText={setCompanyID}
      />
      <Button title="Continue" onPress={handleContinue} />
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
