import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MainStackParamList} from '../types/navigation';

type MainScreenProps = {
  navigation: StackNavigationProp<MainStackParamList, 'Main'>;
};

const MainScreen: React.FC<MainScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Text style={styles.title}>Main Screen</Text>
      <Button
        title="Launch Voicebot"
        onPress={() => navigation.navigate('Voicebot')}
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

export default MainScreen;
