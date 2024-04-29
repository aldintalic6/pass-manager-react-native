import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard } from 'react-native';
import passwordGeneratorStyles from './PasswordGeneratorStyles';
import { Ionicons } from '@expo/vector-icons';

const PasswordGeneratorScreen = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    const passwordLength = Math.floor(Math.random() * 10) + 5; 
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password = password + characters[randomIndex];
    }
    return password;
  };

  const generateNewPassword = () => {
    const newPassword = generatePassword();
    setPassword(newPassword);
    setStrength(calculateStrength(newPassword));
  };

  const calculateStrength = (password : any) => {
    const length = password.length;
    if (length < 6) return 'Weak';
    if (length < 10) return 'Medium';
    return 'Strong';
  };

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
      <TouchableOpacity onPress={generateNewPassword} style={passwordGeneratorStyles.passwordButton}>
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