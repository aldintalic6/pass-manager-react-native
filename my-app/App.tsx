import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native'; // Import SafeAreaView for better compatibility

import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* Use the LoginScreen component for login screen */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;