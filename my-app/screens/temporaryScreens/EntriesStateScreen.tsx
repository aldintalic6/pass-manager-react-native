import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { clearEntries } from '../../redux/entrySlice';

const EntriesStateListScreen = ({ navigation }: { navigation: any }) => {
  const entries = useSelector((state: any) => state.entries.entries); // Access the correct slice
  const dispatch = useDispatch();

  const handleResetEntries = () => {
    dispatch(clearEntries());
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Temporary screen to test if state works</Text>
      <Button title="Reset Entries" onPress={handleResetEntries} />
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 5 }}>
            <Text>id: {item.id}</Text>
            <Text>title: {item.title}</Text>
            <Text>email: {item.email}</Text>
            <Text>password: {item.password}</Text>
            {/* You can display other entry details as needed */}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default EntriesStateListScreen;