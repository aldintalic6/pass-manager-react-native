import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, } from 'react-native';
import passwordGeneratorStyles from './PasswordGeneratorStyles';
import usePasswordGenerator from '../../customhooks/passwordGenerator';
import { Ionicons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

const PasswordGeneratorScreen = () => {
  const { password, strength, generatePassword } = usePasswordGenerator();

  const copyToClipboard = () => {
    Clipboard.setString(password);
    alert('Password copied to clipboard!');
  };

  return (
    <View style={passwordGeneratorStyles.container}>
      <View style={passwordGeneratorStyles.passwordContainer}>
        <Text style={passwordGeneratorStyles.label}>Generated Password:</Text>
        <View style={passwordGeneratorStyles.passwordDisplay}>
          <Text style={passwordGeneratorStyles.passwordText}>{password}</Text>
          <TouchableOpacity onPress={copyToClipboard} style={passwordGeneratorStyles.copyButton}>
            <Ionicons name="copy" size={24} color="#A8A8A8" />
          </TouchableOpacity>
        </View>
        <Text style={passwordGeneratorStyles.strengthText}>Strength: {strength}</Text>
        <TouchableOpacity onPress={generatePassword} style={passwordGeneratorStyles.generateButton}>
          <Text style={passwordGeneratorStyles.buttonText}>Generate Password</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordGeneratorScreen;

