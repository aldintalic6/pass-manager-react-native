import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const image = require("../assets/klix.png");

const EditEntryScreen = () => {
  const [photo, setPhoto] = useState(image); 
  const [name, setName] = useState('Klix');
  const [email, setEmail] = useState('usermail@gmail.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);

  const handleGoBack = () => {
    Alert.alert(
      'Cancel',
      'Are you sure you want to discard changes?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => console.log('Changes discarded') }
      ],
      { cancelable: false }
    );
};

  const handleChoosePhoto = () => {
    setPhoto(null);
    console.log("Choose new photo");
  };

  const handleEditEntry = () => {
    console.log("Entry edited")
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={handleGoBack}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditEntry}>
                <Text style={styles.confirmButtonText}>Confirm</Text>
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
    justifyContent: 'space-evenly',
    paddingTop: 8,
    paddingBottom: 70
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
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
    fontSize: 17
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
    fontSize: 17
  },
  cancelButtonText: {
    color: 'red',
    padding: 7,
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 220
  },
  confirmButtonText: {
    color: 'blue',
    padding: 7,
    fontSize: 16,
  }
});

export default EditEntryScreen;
