import { StyleSheet } from 'react-native';

const addEntryStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center'
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: 70,
      paddingTop: 8,
      width: '100%'
    },
    imageContainer: {
      width: 150,
      height: 150,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 30,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    choosePhotoText: {
      fontSize: 18,
      color: '#555',
    },
    input: {
      width: '100%',
      height: 40,
      borderBottomWidth: 0.3, 
      borderBottomColor: '#CCCCCC', 
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    passwordInputContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 0.3, 
      borderBottomColor: '#CCCCCC', 
      marginBottom: 10,
    },
    passwordInput: {
      flex: 1,
      height: 40,
      paddingHorizontal: 10,
    },
  });

  export default addEntryStyles;