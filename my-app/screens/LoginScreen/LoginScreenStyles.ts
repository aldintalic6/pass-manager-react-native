import { StyleSheet } from 'react-native';

const loginStyles = StyleSheet.create({
    background: {
      flex: 1,
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loginBox: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      height: '40%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
    },
    input: {
      width: '100%',
      height: 40,
      borderBottomWidth: 0.3, 
      borderBottomColor: '#CCCCCC', 
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    button: {
      width: '80%',
      height: 40,
      backgroundColor: '#00cc88',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      marginTop: 15
    },
    buttonText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
    buttonContainer: {
      flexDirection: 'column', 
      alignItems: 'center', 
      width: '100%'
    },
    signUpText: {
      marginTop: 10, 
      color: '#606060', 
      textDecorationLine: 'underline'
    }
  });

export default loginStyles;