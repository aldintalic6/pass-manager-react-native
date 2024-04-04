import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import loginStyles from './LoginScreenStyles';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    console.log('Email:', email);
    console.log('Password:', password);
    setEmail("");
    setPassword("");
  };

  const handleRegister = () => {
    // Handle login logic here
    console.log('Switched to register screen');
  };

  return (
    <ImageBackground source={require('../../assets/login_background.jpeg')} style={loginStyles.background}>
      <View style={loginStyles.container}>
      <Text style={loginStyles.title}>Login</Text>
        <View style={loginStyles.loginBox}>
          <TextInput
            style={loginStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={loginStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={loginStyles.buttonContainer}>
            <TouchableOpacity style={loginStyles.button} onPress={handleLogin}>
              <Text style={loginStyles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={loginStyles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;