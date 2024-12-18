import React from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { SettingsScreenProps } from '../types/screens';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const handleGestureEnd = (event: any) => {
    const { translationY, velocityY } = event.nativeEvent;

    if (translationY > SCREEN_HEIGHT / 4 || velocityY > 1000) {
      navigation.pop();
    }
  };

  return (
    <PanGestureHandler
      onHandlerStateChange={event => {
        if (event.nativeEvent.state === State.END) {
          handleGestureEnd(event);
        }
      }}>
      <View style={styles.container}>
        <View style={styles.content}>
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
      </View>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
  },
});

export default SettingsScreen;
