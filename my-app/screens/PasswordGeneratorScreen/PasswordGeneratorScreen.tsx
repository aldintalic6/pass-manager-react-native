import React from 'react';
import { View, Text, TouchableOpacity, Clipboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import usePasswordGenerator from '../../customhooks/passwordGenerator'; 
import passwordGeneratorStyles from './PasswordGeneratorStyles';

const PasswordGeneratorScreen = ({ navigation }: { navigation: any }) => {
  const { password, strength, generatePassword } = usePasswordGenerator(); // custom hook

  const copyToClipboard = () => {
    Clipboard.setString(password);
    alert('Password copied to clipboard!');
  };

  const handleGoBack = () => {
    console.log("Went back")
  };

  return (
    <View style={passwordGeneratorStyles.container}>
      <View style={passwordGeneratorStyles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={passwordGeneratorStyles.passwordContainer}>
        <Text style={passwordGeneratorStyles.label}>Password: {password}</Text>
        <Text style={passwordGeneratorStyles.label}>Strength: {strength}</Text>
        <TouchableOpacity onPress={generatePassword} style={passwordGeneratorStyles.passwordButton}>
          <Text style={passwordGeneratorStyles.buttonText}>Generate New Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={copyToClipboard} style={passwordGeneratorStyles.clipoardButton}>
          <Text style={passwordGeneratorStyles.buttonText}>Copy to Clipboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordGeneratorScreen;
