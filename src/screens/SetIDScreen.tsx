import { Button, StyleSheet, Text, View } from 'react-native';
import { SetCompanyIDScreenProps } from '../types/screens';

const SetCompanyIDScreen = ({ navigation }: SetCompanyIDScreenProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Company ID</Text>
      <Button
        title="Enter Company ID"
        onPress={() => navigation.navigate('EnterCompanyID')}
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

export default SetCompanyIDScreen;
