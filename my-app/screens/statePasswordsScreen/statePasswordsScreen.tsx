import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

const PasswordStateListScreen = ({ navigation }: { navigation: any }) => {
  const passwords = useSelector((state : any) => state.passwords.passwords);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Password List</Text>
      <FlatList
        data={passwords}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 5 }}>
            <Text>{item.value}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 20 }}
      />
    </View>
  );
};

export default PasswordStateListScreen;