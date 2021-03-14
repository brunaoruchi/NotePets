import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: 135,
    borderRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
  },
  containerPicture: {
    flex: 2,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLabel: {
    flex: 3,
    justifyContent: 'space-between',
    height: '100%',
    paddingLeft: '1%',
  },
  labelName: {
    fontSize: 24,
    height: '30%',
    fontFamily: 'DidactGothic-Regular',
  },
  labelLastNote: {
    height: '70%',
    fontSize: 16,
    fontFamily: 'DidactGothic-Regular',
  },
  containerActions: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  containerInfo: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    top: -15,
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
  },
  line: {
    backgroundColor: '#D76E33',
    width: '100%',
    height: 1,
    marginTop: -5,
    marginBottom: 10,
  },
  nextDate: {
    fontSize: 18,
    fontFamily: 'DidactGothic-Regular',
  },
  observation: {
    fontSize: 18,
    fontFamily: 'DidactGothic-Regular',
  },
  photo: {
    height: 150,
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
