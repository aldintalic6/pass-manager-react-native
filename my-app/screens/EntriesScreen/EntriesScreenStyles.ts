import { StyleSheet } from 'react-native';

const entriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#e0e0e0', 
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb', 
    marginBottom: 15,
    backgroundColor: '#505050', 
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  leftButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    marginRight: 15,
    backgroundColor: '#666', 
    padding: 10,
    borderRadius: 20,
  },
  addButton: {
    backgroundColor: '#808080', 
    padding: 10,
    borderRadius: 20,
    elevation: 3,
  },
  sectionList: {
    paddingBottom: 20,
  },
  entryItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',  
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  entryImage: {
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 20,
  },
  entryTextContainer: {
    flex: 1,
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333', 
  },
  });

export default entriesStyles;