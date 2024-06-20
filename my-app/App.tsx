import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, SafeAreaView } from 'react-native'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './redux/store';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import EntriesScreen from './screens/EntriesScreen/EntriesScreen';
import AddEntryScreen from './screens/AddEntryScreen/AddEntryScreen';
import EditEntryScreen from './screens/EditEntryScreen/EditEntryScreen';
import EntryScreen from './screens/EntryScreen/EntryScreen';
import PasswordGeneratorScreen from './screens/PasswordGeneratorScreen/PasswordGeneratorScreen';
import EntriesStateListScreen from './screens/temporaryScreens/EntriesStateScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Register">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Entries" component={EntriesScreen} />
            <Stack.Screen name="AddEntry" component={AddEntryScreen} />
            <Stack.Screen name="EditEntry" component={EditEntryScreen} />
            <Stack.Screen name="Entry" component={EntryScreen} />
            <Stack.Screen name="PasswordGenerator" component={PasswordGeneratorScreen} />
            <Stack.Screen name="EntriesStateList" component={EntriesStateListScreen} />
          </Stack.Navigator>
          {/* Use different components to show different screens */}
        </View>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;