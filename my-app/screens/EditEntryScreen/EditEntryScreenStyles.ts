import { StyleSheet } from 'react-native';

const editEntryStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center'
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingTop: 8,
      paddingBottom: 70
    },
    imageContainer: {
      width: 150,
      height: 150,
      backgroundColor: '#eee',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 50,
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
      fontSize: 17
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
      fontSize: 17
    },
    cancelButtonText: {
      color: 'red',
      padding: 7,
      fontSize: 16,
      fontWeight: 'bold',
      paddingRight: 220
    },
    confirmButtonText: {
      color: 'blue',
      padding: 7,
      fontSize: 16,
    }
  });
  
  export default editEntryStyles;
  