import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EDEBCB',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '3.5%',
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

  containerInputSmallCalendar: {
    paddingRight: 5,
    flex: 1,
  },

  containerInputSmallCalendar2: {
    flex: 1,
    paddingLeft: 5,
  },
  cameraContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  camera: {
    position: 'absolute',
    bottom: -20,
    right: 10,
    backgroundColor: '#D76E33',
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    fontSize: 20,
    color: '#481610',
    fontFamily: 'Roboto-Regular',
  },
  containerLabelCamera: {
    width: '100%',
  },
  containerObservation: {
    width: '100%',
  },
  inputObservation: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    height: 120,
    textAlignVertical: 'top',
    width: '100%',
    fontSize: 16,
    padding: 10,
  },
});
