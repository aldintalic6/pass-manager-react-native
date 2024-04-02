import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const image = require("../assets/x.png");

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
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={handleGoBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>
        <View style={styles.imageContainer}>
          {photo ? (
            <Image source={photo} style={styles.image} />
          ) : (
            <Text style={styles.choosePhotoText}>Choose Photo</Text>
          )}
        </View>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        editable={false} 
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        editable={false} 
      />
     <View style={styles.passwordInputContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} 
          value={password}
          editable={false} 
        />
        <TouchableOpacity onPress={toggleShowPassword}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={goToEdit} style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Entry</Text>
            </TouchableOpacity>
            <TouchableOpacity  onPress={deleteEntry} style={styles.deleteButton}>
                <Text style={styles.deleteButtonText}>Delete Entry</Text>
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
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
  },
  deleteButtonText: {
    color: 'red',
    padding: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginLeft: 30,
  },
  editButtonText: {
    color: 'blue',
    padding: 7,
    fontSize: 16,
  },
  editButton: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
});

export default EntryScreen;