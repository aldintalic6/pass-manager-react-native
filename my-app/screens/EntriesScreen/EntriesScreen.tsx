import React from 'react';
import { View, Text, Button, SectionList, Image, TouchableOpacity} from 'react-native';
import entriesStyles from './EntriesScreenStyles';
import { Entry } from '../../redux/entrySlice';
import { useSelector } from 'react-redux';

const spotifyImage = require("../../assets/spotify.png");
const netflixImage = require("../../assets/netflix.png");
const xImage = require("../../assets/x.png");


const EntriesScreen = ({ navigation, route }: { navigation: any, route: any }) => {
  const entries: Entry[] = useSelector((state: any) => state.entries.entries); // Accessing entries from Redux store
  
  const naviga = () => {
    navigation.navigate('AddEntry');
  };

  const navigateToEntriesState = () => {
    navigation.navigate('EntriesStateList');
  };

  const handleAddEntry = () => {
    navigation.navigate('AddEntry');
  };
  
  const handleEntryPress = (entryId: string) => {
    navigation.navigate('Entry', { entryId });
  };

  const renderEntryItem = ({ item }: { item: Entry }) => (
    <TouchableOpacity onPress={() => handleEntryPress(item.id)}>
      <View style={entriesStyles.entryItem}>
        <Image source={item.image} style={entriesStyles.entryImage} />
        <Text style={entriesStyles.entryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={entriesStyles.container}>
      <View style={entriesStyles.topBar}>
      <View style={entriesStyles.leftButtons}>
          <Button title="Entries state" onPress={navigateToEntriesState} />
          <Button title="Login state" onPress={handleAddEntry} />
        </View>
        <Button title="Add" onPress={handleAddEntry}  />
      </View>
      <SectionList
        sections={[{ title: 'Entries', data: entries }]}
        renderItem={renderEntryItem}
        keyExtractor={item => item.id}            
      />
    </View>
  );
};

export default EntriesScreen;