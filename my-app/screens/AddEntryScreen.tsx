import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const image = require("../assets/klix.png");

const AddEntryScreen = () => {
  const [photo, setPhoto] = useState(null); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChoosePhoto = () => {
    setPhoto(image);
    console.log("Photo chosen");
  };

  const handleGoBack = () => {
    console.log("Went back")
  };

  const handleAddEntry = () => {
    console.log("Entry added")
    setName("");
    setEmail("");
    setPassword("");
    setPhoto(null);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); // Toggle the state between true and false
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={styles.imageContainer}>
          {photo ? (
            <Image source={photo} style={styles.image} />
          ) : (
            <Text style={styles.choosePhotoText}>Choose Photo</Text>
          )}
        </View>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
     <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} 
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <Button title="Add Entry" onPress={handleAddEntry} />
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
    flexDirection: 'row',
    paddingTop: 8,
    marginBottom: 70,
    marginRight: 305
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  choosePhotoText: {
    fontSize: 18,
    color: '#555',
  },
  input: {
    width: '100%',
    height: 40,
    borderBottomWidth: 0.3, 
    borderBottomColor: '#CCCCCC', 
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordInputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3, 
    borderBottomColor: '#CCCCCC', 
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});

export default AddEntryScreen;
