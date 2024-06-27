import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import entryStyles from './EntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deleteEntry } from '../../redux/entrySlice';
import * as Clipboard from 'expo-clipboard';

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
    navigation.navigate('EditEntry', { entry }); 
};

const copyToClipboard = (text : string) => {
  Clipboard.setString(text);
  alert('Copied to clipboard!');
};

  const deleteEntryFunction = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete the entry?',
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
        <Text style={entryStyles.choosePhotoText}>No Photo</Text>
      )}
    </View>
    <View style={entryStyles.inputContainer}>
      <TextInput
        style={entryStyles.input}
        placeholder="Name"
        value={name}
        editable={false}
      />
    </View>
    <View style={entryStyles.inputContainer}>
      <TextInput
        style={entryStyles.input}
        placeholder="Email"
        value={entryEmail}
        editable={false}
      />
       <TouchableOpacity onPress={() => copyToClipboard(entryEmail)} style={entryStyles.iconButton}>
        <Ionicons name="copy" size={24} color="#555" />
      </TouchableOpacity>
    </View>
    <View style={entryStyles.inputContainer}>
      <TextInput
        style={entryStyles.input}
        placeholder="Password"
        secureTextEntry={!showPassword}
        value={entryPassword}
        editable={false}
      />
      <TouchableOpacity onPress={toggleShowPassword} style={entryStyles.iconButton}>
        <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => copyToClipboard(entryPassword)} style={entryStyles.iconButton}>
        <Ionicons name="copy" size={24} color="#555" />
      </TouchableOpacity>
    </View>
    <View style={entryStyles.buttons}>
      <TouchableOpacity onPress={goToEdit} style={entryStyles.editButton}>
        <Text style={entryStyles.buttonText}>Edit Entry</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={deleteEntryFunction} style={entryStyles.deleteButton}>
        <Text style={entryStyles.buttonText}>Delete Entry</Text>
      </TouchableOpacity>
    </View>
  </View>
);
};

export default EntryScreen;