import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';

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
    <ImageBackground source={require('../assets/login_background.jpeg')} style={styles.background}>
      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
        <View style={styles.loginBox}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '40%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#fff'
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.3, 
    borderBottomColor: '#CCCCCC', 
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#00cc88',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 15
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'column', // Align items horizontally
    alignItems: 'center', // Align items vertically,
    width: '100%'
  },
  signUpText: {
    marginTop: 10, // Add some space between the button and the "Sign Up" text
    color: '#606060', // Color of the "Sign Up" text
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;