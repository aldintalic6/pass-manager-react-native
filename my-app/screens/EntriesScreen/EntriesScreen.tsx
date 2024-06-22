import React, { useEffect } from 'react';
import { View, Text, Button, SectionList, Image, TouchableOpacity, Alert} from 'react-native';
import entriesStyles from './EntriesScreenStyles';
import { Ionicons } from '@expo/vector-icons';
import { Entry } from '../../redux/entrySlice';
import { getEntriesFromAsyncStorage } from '../../redux/entrySlice';
import { useDispatch, useSelector } from 'react-redux';
import { clearEntries } from '../../redux/entrySlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EntriesScreen = ({ navigation, route, setIsAuthenticated }: { navigation: any, route: any, setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const entries: Entry[] = useSelector((state: any) => state.entries.entries); 
  const dispatch = useDispatch();

  // loading data from device storage
  useEffect(() => {
    const loadEntries = async () => {
      try {
        const storedEntries = await AsyncStorage.getItem('entries');
        const storedCurrentId = await AsyncStorage.getItem('currentId');
        if (storedEntries && storedCurrentId) {
          dispatch(getEntriesFromAsyncStorage({ entries: JSON.parse(storedEntries), currentId: JSON.parse(storedCurrentId) }));
        }
      } catch (error) {
        console.error('Failed to load entries from storage', error);
      }
    };

    loadEntries();
  }, [dispatch]);

  const handleAddEntry = () => {
    navigation.navigate('AddEntry');
  };
  
  const handleEntryPress = (entryId: string) => {
    navigation.navigate('Entry', { entryId });
  };

  const handleLogout = () => {
    Alert.alert(
      'Cancel',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => setIsAuthenticated(false) }
      ],
      { cancelable: false }
    );
  };

  const handleResetEntries = () => {
    Alert.alert(
      'Delete',
      'Are you sure you want to delete all entries?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {
          
          dispatch(clearEntries());
        }}
      ],
      { cancelable: false }
    );
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
          <TouchableOpacity onPress={handleLogout} style={entriesStyles.iconButton}>
            <Ionicons name="log-out-outline" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleResetEntries} style={entriesStyles.iconButton}>
            <Ionicons name="trash" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleAddEntry} style={entriesStyles.addButton}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <SectionList
        sections={[{ title: 'Entries', data: entries }]}
        renderItem={renderEntryItem}
        keyExtractor={item => item.id}
        contentContainerStyle={entriesStyles.sectionList}
      />
    </View>
  );
};

export default EntriesScreen;