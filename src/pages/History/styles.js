import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#EDEBCB',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: '3.5%',
    // paddingBottom: 30,
  },
  containerInfo: {
    paddingVertical: 16,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerImage: {
    flex: 1,
  },
  text: {
    textAlign: 'left',
    flex: 2,
    fontSize: 20,
    fontFamily: 'DidactGothic-Regular',
  },
});
