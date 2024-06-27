import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import editEntryStyles from './EditEntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateEntryTitle, updateEntryEmail, updateEntryPassword, updateEntryImage } from '../../redux/entrySlice';
import * as ImagePicker from 'expo-image-picker'; 

const EditEntryScreen = ({ navigation, route }: { navigation: any, route: any }) => {
    const dispatch = useDispatch();

    const { entry } = route.params;
    const { id } = entry;

  const [photo, setPhoto] = useState<string | null>(entry.image.uri);
  const [name, setName] = useState(entry.title);
  const [entryEmail, setEmail] = useState(entry.email);
  const [entryPassword, setPassword] = useState(entry.password);
  const [showPassword, setShowPassword] = useState(false);

  const handleGoBack = () => {
    Alert.alert(
      'Cancel',
      'Are you sure you want to discard changes?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => navigation.navigate('Entry', { entryId: route.params.entry.id }) }
      ],
      { cancelable: false }
    );
};

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

  const handleEditEntry = () => {
    dispatch(updateEntryTitle({ id, title: name }));
    dispatch(updateEntryEmail({ id, email: entryEmail }));
    dispatch(updateEntryPassword({ id, password: entryPassword }));
    if (photo) {
      dispatch(updateEntryImage({ id, image: { uri: photo } }));
    }
    navigation.navigate('Entries');
};

  const handlePasswordGenerator = () => {
    navigation.navigate('PasswordGenerator');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <View style={editEntryStyles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={editEntryStyles.imageContainer}>
          {photo ? (
            <Image source={{ uri: photo }} style={editEntryStyles.image} />
          ) : (
            <Text style={editEntryStyles.choosePhotoText}>Choose Photo</Text>
          )}
        </View>
      </TouchableOpacity>
      <TextInput
        style={editEntryStyles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={editEntryStyles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={entryEmail}
        onChangeText={setEmail}
      />
      <View style={editEntryStyles.passwordInputContainer}>
        <TextInput
          style={editEntryStyles.passwordInput}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={entryPassword}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={handlePasswordGenerator} style={editEntryStyles.iconButton}>
          <Ionicons name="key" size={24} color="#555" />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleShowPassword} style={editEntryStyles.iconButton}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <View style={editEntryStyles.buttons}>
        <TouchableOpacity onPress={handleGoBack} style={[editEntryStyles.confirmButton, editEntryStyles.cancelButton]}>
          <Text style={editEntryStyles.buttonText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleEditEntry} style={editEntryStyles.confirmButton}>
          <Text style={editEntryStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditEntryScreen;
