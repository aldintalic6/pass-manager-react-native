import React from 'react';
import { View, Text, Button, SectionList, StyleSheet, Image, ImageSourcePropType, TouchableOpacity} from 'react-native';

const spotifyImage = require("../assets/spotify.png");
const netflixImage = require("../assets/netflix.png");
const xImage = require("../assets/x.png");

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

  const EntriesScreen = () => {
    const handleAddEntry = () => {
      console.log('Navigate to Add Entry screen');
    };
  
    const handleEntryPress = (entry: any) => {
      console.log('Entry clicked:', entry);
    };

  const renderEntryItem = ({ item } : {item : any}) => (
    <TouchableOpacity onPress={() => handleEntryPress(item)}>
      <View style={styles.entryItem}>
        <Image source={item.image} style={styles.entryImage} />
        <Text style={styles.entryTitle}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingTop: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  entryItem: {
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row', // Align image and text horizontally
    alignItems: 'center', // Center items vertically
  },
  entryImage: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 15, // Half of width and height for circular image
  },
  entryTitle: {
    fontSize: 18,
    marginLeft: 5,
  },
});

export default EntriesScreen;

