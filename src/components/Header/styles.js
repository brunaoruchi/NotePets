import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBC072',
    height: 50,
  },
  text: {
    color: '#481610',
    fontSize: 30,
    fontFamily: 'DidactGothic-Regular',
    alignSelf: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 0, height: 2},
    textShadowRadius: 4,
    paddingRight: '22%',
  },
  containerTitle: {
    backgroundColor: '#FBC072',
    flex: 5,
  },
  containerButton: {
    justifyContent: 'center',
    backgroundColor: '#FBC072',
    paddingLeft: 10,
    flex: 1,
  },
});
