import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width,
    height,
    position: 'relative',
    backgroundColor: 'pink',
  },
  wrapper: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-0.23%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  upperCont: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-6.89%',
    bottom: '59.77%',
    borderRadius: 50,
  },
  lowerCont: {
    position: 'absolute',
    left: '8.27%',
    right: '8.6%',
    top: '35.25%',
    bottom: '6.1%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
  },
});
