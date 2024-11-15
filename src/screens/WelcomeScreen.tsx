import {View, Text, Button, StyleSheet} from 'react-native';

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate('EnterCompanyID')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
