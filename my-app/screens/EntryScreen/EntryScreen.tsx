import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import entryStyles from './EntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { deletePassword } from '../../redux/passwordSlice';
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

  const handleGoBack = () => {
    navigation.navigate('Entries');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  const goToEdit = () => {
    navigation.navigate('EditEntry', { entry }); // Pass the entry object
};

  const deleteEntry = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete entry?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => dispatch(deletePassword(1)) }
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
            <TouchableOpacity  onPress={deleteEntry} style={entryStyles.deleteButton}>
                <Text style={entryStyles.deleteButtonText}>Delete Entry</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EntryScreen;