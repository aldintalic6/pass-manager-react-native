import { StyleSheet } from 'react-native';

const entriesStyles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    topBar: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingTop: 8
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    entryItem: {
      margin: 10,
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      flexDirection: 'row', 
      alignItems: 'center', 
    },
    entryImage: {
      width: 60,
      height: 60,
      marginRight: 10,
      borderRadius: 15, 
    },
    entryTitle: {
      fontSize: 18,
      marginLeft: 5,
    },
  });

export default entriesStyles;