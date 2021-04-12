import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EDEBCB',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: '3.5%',
    paddingBottom: 30,
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
    marginBottom: 6,
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
    marginBottom: 16,
  },
  containerObservation: {
    width: '100%',
    marginBottom: 30,
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
  containerCategory: {
    width: '100%',
    marginBottom: 16,
  },
  containerButtons: {
    paddingBottom: 5,
    justifyContent: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    borderColor: '#D76E33',
    flex: 1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderStartWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
  },
  containerFooterLineTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerFooterLineBottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelCategory: {
    fontSize: 14,
    color: '#481610',
    fontFamily: 'Roboto-Regular',
    flex: 1,
    justifyContent: 'center',
  },
  containerCamera: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
