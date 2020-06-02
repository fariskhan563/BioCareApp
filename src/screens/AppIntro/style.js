import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  slideCont: {
    width,
    height,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  imgCont: {
    width,
    height: '68%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: 'lightblue',
  },
  img: {
    width: width * 0.8,
    height: height * 0.68,
    marginTop: height * 0.025,
  },
  textCont: {
    width: '65%',
    height: '18%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  text: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    color: '#333333',
    lineHeight: 15,
    marginTop: height * 0.02,
  },
  skipBox: {
    width: width * 0.12,
    height: height * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#8A9DA2',
    marginLeft: width * 0.01,
    // backgroundColor: 'lightblue',
  },
  skipText: {
    fontFamily: 'Helvetica Neue',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: width * 0.04,
    color: '#8A9DA2',
    lineHeight: 15,
  },
});
