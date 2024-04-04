import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native'; // Import SafeAreaView for better compatibility

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import EntriesScreen from './screens/EntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen';
import EntryScreen from './screens/EntryScreen';
import PasswordGeneratorScreen from './screens/PasswordGeneratorScreen';

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