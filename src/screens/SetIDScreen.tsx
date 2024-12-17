import { Button, StyleSheet, View } from 'react-native';
import { SetCompanyIDScreenProps } from '../types/screens';

const SetCompanyIDScreen = ({ navigation }: SetCompanyIDScreenProps) => {
  return (
    <View style={styles.container}>
      <Button
        title="Enter Company ID"
        onPress={() =>
          navigation.navigate('EnterIDScreen', { isUpdateMode: true })
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
  },
});

export default SetCompanyIDScreen;
