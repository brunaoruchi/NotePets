import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EDEBCB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: '3.5%',
    width: '100%',
    flex: 1,
  },
  containerImage: {
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  imageStyle: {
    width: 100,
    resizeMode: 'contain',
  },
  imageStyleLabel: {
    width: 140,
    top: -10,
    resizeMode: 'contain',
  },
  loginLabel: {
    color: '#992B25',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: -10,
    fontFamily: 'Roboto-Medium',
  },
  containerInput: {
    width: '100%',
    justifyContent: 'space-between',
  },
  containerButton: {
    width: '100%',
    marginTop: 30,
    marginBottom: 40,
  },
});
