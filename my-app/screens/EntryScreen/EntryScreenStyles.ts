import { StyleSheet } from 'react-native';

const entryStyles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center'
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
    buttons: {
      flexDirection: 'row',
      marginTop: 20,
    },
    deleteButtonText: {
      color: 'red',
      padding: 7,
      fontSize: 16,
      fontWeight: 'bold',
    },
    deleteButton: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      marginLeft: 30,
    },
    editButtonText: {
      color: 'blue',
      padding: 7,
      fontSize: 16,
    },
    editButton: {
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
    },
  });

export default entryStyles;