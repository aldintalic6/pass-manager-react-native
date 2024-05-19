import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import entryStyles from './EntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntry } from '../../redux/entrySlice';
const image = require("../../assets/x.png");

const EntryScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const dispatch = useDispatch();
  
  const entryId = route.params.entryId;
  const entry = useSelector((state: any) => state.entries.entries.find((e: any) => e.id === entryId));

  const [photo, setPhoto] = useState(entry.image); 
  const [name, setName] = useState(entry.title);
  const [entryEmail, setEmail] = useState(entry.email);
  const [entryPassword, setPassword] = useState(entry.password);
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const goToEdit = () => {
    navigation.navigate('EditEntry', { entry }); // Pass the entry object
};

  const deleteEntryFunction = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {
          navigation.navigate('Entries', { entry });
          dispatch(deleteEntry(entryId));
        }}
      ],
      { cancelable: false }
    );
};

  return (
    <View style={entryStyles.container}>
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
        value={entryEmail}
        editable={false} 
      />
     <View style={entryStyles.passwordInputContainer}>
        <TextInput
          style={entryStyles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword} 
          value={entryPassword}
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
            <TouchableOpacity  onPress={deleteEntryFunction} style={entryStyles.deleteButton}>
                <Text style={entryStyles.deleteButtonText}>Delete Entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryScreen;