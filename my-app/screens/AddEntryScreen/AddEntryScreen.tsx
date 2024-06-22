import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import addEntryStyles from './AddEntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import usePasswordValidator from '../../customhooks/passwordValidator';
import { useSelector, useDispatch } from 'react-redux';
import { addEntry } from '../../redux/entrySlice';
import * as ImagePicker from 'expo-image-picker'; 

  const AddEntryScreen = ({ navigation }: { navigation: any }) => {
    const dispatch = useDispatch();

  const [photo, setPhoto] = useState<string | null>(null); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isValid, validatePassword } = usePasswordValidator(); // custom hook

  const handleChoosePhoto = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    if (!pickerResult.canceled) {
      setPhoto(pickerResult.assets[0].uri);
    }
  };

  const handleAddEntry = () => {
    if (isValid) {
      dispatch(
        addEntry({ 
          title: name,
          image: photo ? { uri: photo } : null, // Set image property to correct format
          email: email,
          password: password,
        })
      );
      setName('');
      setEmail('');
      setPassword('');
      navigation.navigate('Entries');
    } else {
      alert('Please enter a valid password.');
    }
  };

  const handlePasswordChange = (value : any) => {
    setPassword(value);
    validatePassword(value);
  };

  const handlePasswordGenerator = () => {
    navigation.navigate('PasswordGenerator');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <View style={addEntryStyles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={addEntryStyles.imageContainer}>
          {photo ? (
            <Image source={{ uri: photo }} style={addEntryStyles.image} />
          ) : (
            <Text style={addEntryStyles.choosePhotoText}>Choose Photo</Text>
          )}
        </View>
      </TouchableOpacity>
      <TextInput
        style={addEntryStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={addEntryStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={addEntryStyles.passwordInputContainer}>
        <TextInput
          style={addEntryStyles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={handlePasswordChange}
        />
        <TouchableOpacity onPress={handlePasswordGenerator} style={addEntryStyles.iconButton}>
          <Ionicons name="key" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleShowPassword} style={addEntryStyles.iconButton}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleAddEntry} style={addEntryStyles.addButton}>
        <Text style={addEntryStyles.addButtonText}>Add Entry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEntryScreen;
