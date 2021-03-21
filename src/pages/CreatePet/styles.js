import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EDEBCB',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '3.5%',
  },
  containerText: {
    width: '100%',
  },
  text: {
    fontSize: 20,
    fontFamily: 'DidactGothic-Regular',
    textAlign: 'center',
    paddingVertical: 16,
  },
  containerInputSmallRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 50,
    marginTop: 6,
  },
  containerInputSmall: {
    flex: 1,
  },
  containerInputSmallCalendar: {
    flex: 1,
  },
  cameraContainer: {
    position: 'relative',
    marginBottom: 25,
  },
  camera: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    backgroundColor: '#D76E33',
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
