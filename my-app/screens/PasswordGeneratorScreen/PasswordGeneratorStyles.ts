import { StyleSheet } from 'react-native';

const passwordGeneratorStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
    },
    passwordContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30
    },
    label: {
      fontSize: 18,
      marginBottom: 10,
    },
    passwordButton: {
      backgroundColor: '#2196F3',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
    },
    clipoardButton: {
      backgroundColor: '#4CAF50',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginTop: 20,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  });

export default passwordGeneratorStyles;