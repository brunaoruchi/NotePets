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
    alignItems: 'flex-start',
    // paddingRight: '3.5%',
  },
  containerInputSmall: {
    width: '100%',
  },
  containerInputSmallCalendar: {
    width: '100%',
    marginLeft: '-50%',
  },
  camera: {
    backgroundColor: '#D76E33',
    borderRadius: 50,
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-8%',
    marginLeft: '20%',
  },
});
