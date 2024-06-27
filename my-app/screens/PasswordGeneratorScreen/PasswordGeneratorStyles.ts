import { StyleSheet } from 'react-native';

const passwordGeneratorStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
  },
  passwordContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  passwordDisplay: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  passwordText: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  copyButton: {
    padding: 10,
  },
  strengthText: {
    fontSize: 16,
    marginBottom: 20,
  },
  generateButton: {
    backgroundColor: '#404040',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  });

export default passwordGeneratorStyles;