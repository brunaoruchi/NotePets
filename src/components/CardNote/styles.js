import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: 325,
    height: 150,
    borderRadius: 20,
    flexDirection: 'row',
    paddingVertical: '2%',
    paddingRight: '1%',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
    marginBottom: 16,
  },
  containerLabel: {
    justifyContent: 'center',
    height: '100%',
    flex: 3,
    paddingHorizontal: '5%',
    marginVertical: 10,
  },
  labelInfo: {
    fontSize: 18,
    fontFamily: 'DidactGothic-Regular',
  },
  containerActions: {
    flex: 1,
    justifyContent: 'space-between',
    height: '100%',
  },
  containerInfo: {
    backgroundColor: '#FFFFFF',
    width: 325,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingVertical: '2%',
    paddingRight: '1%',
    justifyContent: 'space-between',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {width: 0, height: 4},
    elevation: 6,
  },
  containerObservation: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginBottom: -10,
  },
  containerLabelObsevation: {
    justifyContent: 'center',
    flex: 3,
    paddingHorizontal: '5%',
    marginTop: 10,
    top: -24.5,
  },
  containerActionsObsevation: {
    marginTop: 10,
    flex: 1,
  },
  photo: {
    alignItems: 'center',
  },
});
