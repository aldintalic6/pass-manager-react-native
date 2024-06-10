import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import loginStyles from './LoginScreenStyles';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers, loginStart, loginSuccess, loginFailure, loadUsersFromStorage } from '../../redux/authSlice';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();
  const users = useSelector((state: any) => state.auth.users);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const loadUsers = async () => {
      const storedUsers = await loadUsersFromStorage();
      dispatch(setUsers(storedUsers));
    };
    loadUsers();
  }, [dispatch]);

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill in all fields');
      dispatch(loginFailure('Error logging in'));
      return;
    }

    const user = users.find((user: any) => user.email === email && user.password === password);
    if (!user) {
      Alert.alert('Invalid email or password');
      return;
    }

    dispatch(loginStart());

    setTimeout(() => {
      setEmail("");
      setPassword("");
      dispatch(loginSuccess(user));
      navigation.navigate('Entries'); 
    }, 1000);
  };

  const handleRegister = () => {
    
    navigation.navigate('Register');
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