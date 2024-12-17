import { Button, Modal, StyleSheet, Text, View } from 'react-native';
import VoiceIcon from '../components/VoiceIcon';
import { VoicebotScreenProps } from '../types/screens';
import { BlurView } from '@react-native-community/blur';

const VoicebotScreen = ({ visible, setVisible }: VoicebotScreenProps) => {
  const handleDismiss = () => {
    setVisible(false);
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={handleDismiss}>
      <View style={styles.modalBackdrop}>
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurAmount={10}
        />
        <View style={styles.modalContent}>
          <Text style={styles.title}>Voicebot Screen</Text>
          <VoiceIcon />
          <Button title="Dismiss" onPress={handleDismiss} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(10, 20, 0, 0.4)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 50,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VoicebotScreen;
