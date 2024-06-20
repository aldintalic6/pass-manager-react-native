import React, { useState } from 'react';
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

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const AuthStackScreen = () => (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen name="Login">
        {(props) => <LoginScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </AuthStack.Screen>
      <AuthStack.Screen name="Register" component={RegisterScreen} />
    </AuthStack.Navigator>
  );

  const MainStackScreen = () => (
    <MainStack.Navigator initialRouteName="Entries">
      <MainStack.Screen name="Entries">
        {(props) => <EntriesScreen {...props} setIsAuthenticated={setIsAuthenticated} />}
      </MainStack.Screen>
      <AuthStack.Screen name="AddEntry" component={AddEntryScreen} />
      <AuthStack.Screen name="EditEntry" component={EditEntryScreen} />
      <AuthStack.Screen name="Entry" component={EntryScreen} />
      <AuthStack.Screen name="PasswordGenerator" component={PasswordGeneratorScreen} />
      <AuthStack.Screen name="EntriesStateList" component={EntriesStateListScreen} />
    </MainStack.Navigator>
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.container}>
          {isAuthenticated ? (
          <MainStackScreen />
        ) : (
          <AuthStackScreen />
        )}
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