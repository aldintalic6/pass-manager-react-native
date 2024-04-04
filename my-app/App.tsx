import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native'; // Import SafeAreaView for better compatibility

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EntriesScreen from './screens/EntriesScreen/EntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen/EditEntryScreen';
import EntryScreen from './screens/EntryScreen/EntryScreen';
import PasswordGeneratorScreen from './screens/PasswordGeneratorScreen/PasswordGeneratorScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <PasswordGeneratorScreen/>
      {/* Use different components to show different screens */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;