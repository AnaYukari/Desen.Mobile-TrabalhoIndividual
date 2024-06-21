import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

interface ButtonProps {
  buttonText: string;
}

export const BotaoSecundario: React.FC<ButtonProps> = ({ buttonText }) => {
  return (
    <TouchableOpacity activeOpacity={0.4} style={styles.toButton}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};
