import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './style';

interface ButtonProps {
  buttonText: string;
}

export const BotaoPrimario: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <LinearGradient
      colors={['rgba(239,74,139,1)', 'rgba(242,112,165,1)']}
      style={styles.gradientBackground}
      start={{ x: 0.32, y: 0 }}
      end={{ x: 0.54, y: 1 }}
    >
      <TouchableOpacity activeOpacity={0.4} style={styles.toButton}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
