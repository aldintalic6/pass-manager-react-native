import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, TouchableOpacity, Alert } from 'react-native';
import editEntryStyles from './EditEntryScreenStyles';
import { Ionicons } from '@expo/vector-icons';
const image = require("../../assets/klix.png");

  const EditEntryScreen = ({ navigation }: { navigation: any }) => {

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
        { text: 'OK', onPress: () => navigation.navigate('Entry') }
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
    navigation.navigate('Entry');
  };

  const handePasswordGenerator = () => {
    navigation.navigate('PasswordGenerator');
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <View style={editEntryStyles.container}>
        <View style={editEntryStyles.topBar}>
            <TouchableOpacity onPress={handleGoBack}>
                <Text style={editEntryStyles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEditEntry}>
                <Text style={editEntryStyles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleChoosePhoto}>
            <View style={editEntryStyles.imageContainer}>
                {photo ? (
                    <Image source={photo} style={editEntryStyles.image} />
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
            value={email}
            onChangeText={setEmail}
        />
        <View style={editEntryStyles.passwordInputContainer}>
            <TextInput
                style={editEntryStyles.passwordInput}
                placeholder="Password"
                secureTextEntry={!showPassword} 
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity onPress={handePasswordGenerator} style={{marginRight: 12}}>
              <Ionicons name="key" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleShowPassword}>
                <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#555" />
            </TouchableOpacity>
        </View>
    </View>
  );
};

export default EditEntryScreen;
