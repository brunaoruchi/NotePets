import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 150,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: '2%',
    paddingRight: '1%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
    marginBottom: 16,
  },
  containerPicture: {
    width: '35%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLabel: {
    justifyContent: 'center',
    height: '100%',
    width: '50%',
  },
  labelName: {
    fontSize: 24,
    fontFamily: 'DidactGothic-Regular',
  },
  labelInfo: {
    fontSize: 18,
    fontFamily: 'DidactGothic-Regular',
  },
  containerActions: {
    width: '15%',
    justifyContent: 'space-between',
    height: '100%',
  },
});
