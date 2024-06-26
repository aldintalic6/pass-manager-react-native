import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert} from 'react-native';
import registerStyles from './RegisterScreenStyles';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/authSlice';
import usePasswordValidator from '../../customhooks/passwordValidator';
import { checkPasswordPwned } from '../../additional/HIBW';

const ReigsterScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { isValid, validatePassword } = usePasswordValidator(); // custom hook

  const handleRegister = async () => {
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
      Alert.alert('Please fill in all fields');
      return;
    }

    if (!isEmailValid(email)) {
      Alert.alert('Email is not in valid format!');
      return;
    }

    if (!isValid) {
      Alert.alert('Password does not meet the criteria. Password needs to have a capital letter and minimum 8 charactetrs');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    try {
      const isPwned = await checkPasswordPwned(password);
      if (isPwned) {
        Alert.alert('This password was found in a data breach using HIBW API. Please choose a different one.');
        return;
      }
    } catch (error) {
      Alert.alert('Failed to check password. Please try again.');
      return;
    }

    dispatch(addUser({ email, password, username }));

    console.log('Email:', email);
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");

    navigation.navigate('Login');
  };
  
  const handleLogin = () => {
    
    navigation.navigate('Login');
  };

  const isEmailValid = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <ImageBackground source={require('../../assets/gray.jpeg')} style={registerStyles.background}>
      <View style={registerStyles.container}>
        <View style={registerStyles.loginBox}>
          <TextInput
            style={registerStyles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={registerStyles.input}
            placeholder="Username"
            keyboardType="default"
            autoCapitalize="none"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={registerStyles.input}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={password}
            onChangeText={text => {
              setPassword(text);
              validatePassword(text);
            }}
          />
          <TextInput
            style={registerStyles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
          <View style={registerStyles.buttonContainer}>
            <TouchableOpacity style={registerStyles.button} onPress={handleRegister}>
              <Text style={registerStyles.buttonText}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin}>
              <Text style={registerStyles.signUpText}>Have an account?</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default ReigsterScreen;