import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#51BBFE',
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  register: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: '#51BBFE',
    borderBottomColor: '#000000',
    borderBottomWidth: 3,
  },

  pix: {
    height: 300,
    width: 300,
    borderWidth: 1,
    border: '#FFFFFF',
    borderRadius: 50,
  },

  home: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    height: '100%',
    width: '100%',
    backgroundColor: '#51BBFE',
  },

  textinput: {
    height: 50,
    width: 200,
    borderWidth: 4,
    borderColor: '#FAE1A1',
    borderStyle: 'solid',
    borderRadius: 8,
    margin: 8,
    padding: 8,
    color: '#FAE1A1',
  },

  desc: {
    borderColor: '#FFFFFF',
    borderStyle: 'solid',
    borderWidth: 1,
    marginHorizontal: 50,
    fontSize: 20,
    width: 0.8*Dimensions.get('window').width,
  },
});
