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
    top: '0%',
    bottom: '0%',
    backgroundColor: '#F5F5F5',
  },
  upperCont: {
    position: 'absolute',
    left: '0%',
    right: '0%',
    top: '-3.04%',
    bottom: '82.26%',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  upperWrapper: {
    width: '100%',
    height: height * 0.22,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backIconWrapper: {
    width: width * 0.2,
    height: height * 0.05,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    width: width * 0.29,
    height: width * 0.15,
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 90,
  },
  uName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: '9.25%',
    right: '9.73%',
    top: '14.22%',
    bottom: '78.83%',
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 20,
    elevation: 1,
    paddingLeft: 20,
  },
  searchinp: {
    marginLeft: 12,
  },
  BannerWrapper: {
    marginTop: 160,
  },
  DocListWrapper: {
    marginTop: 15,
    padding: 20,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 10,
  },
  DocSpecsWrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#7FE1D7',
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
  },
  docImg: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  docTextWrapper: {
    marginRight: 30,
  },
  docText: {
    color: '#000',
  },
  docSubText: {
    marginTop: 5,
  },
});
