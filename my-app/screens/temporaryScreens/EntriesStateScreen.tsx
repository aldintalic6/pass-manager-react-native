import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const EntriesStateListScreen = ({ navigation }: { navigation: any }) => {
  const entries = useSelector((state: any) => state.entries.entries); // Access the correct slice

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Temporary screen to test if state works</Text>
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 5 }}>
            <Text>{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.email}</Text>
            <Text>{item.password}</Text>
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