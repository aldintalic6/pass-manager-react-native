import { StyleSheet } from 'react-native';

const entryStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#e0e0e0', 
    justifyContent: 'center',
  },
  imageContainer: {
    width: 150,
    height: 150,
    backgroundColor: '#d9e3f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginBottom: 30,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  choosePhotoText: {
    fontSize: 18,
    color: '#555',
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-around',
    width: '100%',
  },
  iconButton: {
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#A8A8A8',
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: '#404040',
    borderRadius: 10,
  },
});

export default entryStyles;