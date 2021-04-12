import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 325,
    height: 130,
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
    justifyContent: 'space-between',
    height: '100%',
    width: '50%',
  },
  labelName: {
    fontSize: 24,
    height: '30%',
    fontFamily: 'DidactGothic-Regular',
  },
  labelLastNote: {
    height: '70%',
    fontSize: 17,
    fontFamily: 'DidactGothic-Regular',
  },
  containerActions: {
    width: '15%',
    justifyContent: 'space-between',
    height: '85%',
  },
  containerInfo: {
    backgroundColor: '#FFFFFF',
    width: 325,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    top: -32,
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
    marginBottom: -15,
  },
  line: {
    backgroundColor: '#D76E33',
    width: '100%',
    height: 1,
    marginBottom: 10,
  },
  nextDate: {
    fontSize: 19,
    fontFamily: 'DidactGothic-Regular',
  },
  observation: {
    fontSize: 19,
    fontFamily: 'DidactGothic-Regular',
  },
  photo: {
    marginTop: 10,
    alignItems: 'center',
  },
});
