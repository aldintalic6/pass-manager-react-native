import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Clipboard, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
        </View>
        <View style={styles.passwordContainer}>
      <Text style={styles.label}>Password: {password}</Text>
      <Text style={styles.label}>Strength: {strength}</Text>
      <TouchableOpacity onPress={generateNewPassword} style={styles.passwordButton}>
        <Text style={styles.buttonText}>Generate New Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={copyToClipboard} style={styles.clipoardButton}>
        <Text style={styles.buttonText}>Copy to Clipboard</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center'
  },
  topBar: {
    paddingTop: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '100%',
  },
  passwordContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  passwordButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  clipoardButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PasswordGeneratorScreen;
