import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import entryStyles from './EntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
const image = require("../../assets/x.png");

const EntryScreen = () => {
  const [photo, setPhoto] = useState(image); 
  const [name, setName] = useState('X');
  const [email, setEmail] = useState('usermail@x.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleGoBack = () => {
    console.log("Went back to entries screen")
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const goToEdit = () => {
    console.log("Went to edit screen!")
  };

  const deleteEntry = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => console.log('Entry deleted') }
      ],
      { cancelable: false }
    );
};

  return (
    <View style={entryStyles.container}>
      <View style={entryStyles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
        <View style={entryStyles.imageContainer}>
          {photo ? (
            <Image source={photo} style={entryStyles.image} />
          ) : (
            <Text style={entryStyles.choosePhotoText}>Choose Photo</Text>
          )}
        </View>
      <TextInput
        style={entryStyles.input}
        placeholder="Name"
        value={name}
        editable={false} 
      />
      <TextInput
        style={entryStyles.input}
        placeholder="Email"
        value={email}
        editable={false} 
      />
     <View style={entryStyles.passwordInputContainer}>
        <TextInput
          style={entryStyles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} 
          value={password}
          editable={false} 
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <View style={entryStyles.buttons}>
        <TouchableOpacity onPress={goToEdit} style={entryStyles.editButton}>
                <Text style={entryStyles.editButtonText}>Edit Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={deleteEntry} style={entryStyles.deleteButton}>
                <Text style={entryStyles.deleteButtonText}>Delete Entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryScreen;