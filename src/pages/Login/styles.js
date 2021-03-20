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
    width: 110,
    resizeMode: 'contain',
  },
  imageStyleLabel: {
    width: 160,
    marginTop: -5,
    resizeMode: 'contain',
  },
  loginLabel: {
    color: '#992B25',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    alignSelf: 'center',
  },
  containerInput: {
    width: '100%',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  containerLabelForget: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    width: '100%',
    marginTop: -15,
  },
  loginLabelForget: {
    color: '#992B25',
    fontSize: 16,
  },
  containerButton: {
    width: '100%',
    marginBottom: 70,
    marginTop: 60,
  },
});
