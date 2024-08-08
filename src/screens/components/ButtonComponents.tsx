import React from 'react'
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../../theme/apptheme';

interface BotonProps {
  titulo: string
  onPress: () => void
}

export const ButtonComponents = ({ titulo, onPress }: BotonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{titulo}</Text>
    </TouchableOpacity>
  );
};