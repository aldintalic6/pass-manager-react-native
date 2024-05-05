import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import addEntryStyles from './AddEntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import usePasswordValidator from '../../customhooks/passwordValidator';
import { useSelector, useDispatch } from 'react-redux';
import { addPassword } from '../../redux/passwordSlice';

const image = require("../../assets/klix.png");

const AddEntryScreen = ({ navigation }: { navigation: any }) => {
  const dispatch = useDispatch();

  const [photo, setPhoto] = useState(null); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isValid, validatePassword } = usePasswordValidator(); // custom hook

  const handleChoosePhoto = () => {
    setPhoto(image);
    console.log("Photo chosen");
  };

  const handleGoBack = () => {
    navigation.navigate('Entries');
  };

  const handleAddEntry = () => {
    if (isValid) {
      dispatch(addPassword({ id: 1, value: password }));
      navigation.navigate('Entries');
    } else {
      alert('Please enter a valid password.');
    }
  };

  const handlePasswordChange = (value : any) => {
    setPassword(value);
    validatePassword(value);
  };

  const handePasswordGenerator = () => {
    navigation.navigate('PasswordGenerator');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <View style={addEntryStyles.container}>
      <View style={addEntryStyles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={addEntryStyles.imageContainer}>
          {photo ? (
            <Image source={photo} style={addEntryStyles.image} />
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
          onChangeText={handlePasswordChange} // Call handlePasswordChange when the password changes
        />
        <TouchableOpacity onPress={handePasswordGenerator} style={{marginRight: 12}}>
          <Ionicons name="key" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <Button title="Add Entry" onPress={handleAddEntry} />
    </View>
  );
};

export default AddEntryScreen;
