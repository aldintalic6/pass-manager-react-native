import React from 'react';
import { View, Text, Button, SectionList, Image, TouchableOpacity} from 'react-native';
import entriesStyles from './EntriesScreenStyles';

const spotifyImage = require("../../assets/spotify.png");
const netflixImage = require("../../assets/netflix.png");
const xImage = require("../../assets/x.png");

interface Entry {
  id: string;
  title: string;
  image: any;
}

const entries: Entry[] = [
  { id: '1', title: 'Spotify', image: spotifyImage },
  { id: '2', title: 'Netflix', image: netflixImage },
  { id: '3', title: 'X', image: xImage },
  // more entries will be added
];

const EntriesScreen = ({ navigation }: { navigation: any }) => {

  const handleAddEntry = () => {
    navigation.navigate('AddEntry');
  };
  
  const handleEntryPress = (entry: any) => {
    navigation.navigate('Entry');
  };

  const renderEntryItem = ({ item } : {item : any}) => (
    <TouchableOpacity onPress={() => handleEntryPress(item)}>
      <View style={entriesStyles.entryItem}>
        <Image source={item.image} style={entriesStyles.entryImage} />
        <Text style={entriesStyles.entryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={entriesStyles.container}>
        <View style={entriesStyles.topBar}>
            <Button title="Add" onPress={handleAddEntry} />
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