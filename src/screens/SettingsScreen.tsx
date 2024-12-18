import React, { useState } from 'react';
import { StyleSheet, Button, View, Dimensions } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { SettingsScreenProps } from '../types/screens';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const SettingsScreen = ({ navigation }: SettingsScreenProps) => {
  const [translateY, setTranslateY] = useState(0);

  const handleGestureEvent = (event: any) => {
    const { translationY } = event.nativeEvent;

    if (translationY >= 0) {
      setTranslateY(translationY);
    }
  };

  const handleGestureEnd = (event: any) => {
    const { translationY, velocityY } = event.nativeEvent;

    if (translationY > SCREEN_HEIGHT / 4 || velocityY > 1000) {
      navigation.pop();
    } else {
      setTranslateY(0);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGestureEvent}
      onHandlerStateChange={event => {
        if (event.nativeEvent.state === State.END) {
          handleGestureEnd(event);
        }
      }}>
      <View
        style={[
          styles.container,
          {
            transform: [{ translateY }],
          },
        ]}>
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
