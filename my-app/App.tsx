import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EntriesScreen from './screens/EntriesScreen/EntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen/EditEntryScreen';
import EntryScreen from './screens/EntryScreen/EntryScreen';
import PasswordGeneratorScreen from './screens/PasswordGeneratorScreen/PasswordGeneratorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (  
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
        {/* Use different components to show different screens */}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;