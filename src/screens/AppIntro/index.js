import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');
import styles from './style';
import {Icons, Images} from '../../utils';

//HomeScreen
import {AppHome} from '../../navigation';

//Libraries
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';

const introSlider = [
  {
    text: 'Delivery at your doorstep.',
    image: Images.medicineLogo,
    bg: '#59b2ab',
  },
  {
    text:
      'Too busy to see a doctor? Now, book an appointment or consult a doctor at ease.',
    image: Images.doctorsLogo,
    bg: '#febe29',
  },
  {
    text:
      'Free sample collection from home, now makes it easy and convenient for patients to check their lab test results online.',
    image: Images.labtestLogo,
    bg: '#22bcb5',
  },
  {
    text:
      'Buy an affordable medical insurance policy online for family, individuals and senior citizens.',
    image: Images.insuranceLogo,
    bg: '#22bcb5',
  },
];

class AppIntro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showRealApp: false,
    };
  }

  _renderItem = ({item}) => {
    return (
      <View style={styles.slideCont}>
        <View style={styles.imgCont}>
          <Image
            source={item.image}
            style={styles.img}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.textCont}>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };
  _onDone = () => {
    this.setState({showRealApp: true});
  };
  _onSkip = () => {
    this.setState({showRealApp: true});
  };
  _renderNextButton = () => {
    return (
      <View>
        <Image source={Images.bannerBtn} style={{marginRight: width * 0.02}} />
      </View>
    );
  };
  _renderSkipButton = () => {
    return (
      <View style={styles.skipBox}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
    );
  };
  _renderDoneButton = () => {
    return (
      <View>
        <Image source={Images.bannerBtn} style={{marginRight: width * 0.02}} />
      </View>
    );
  };

  render() {
    if (this.state.showRealApp) {
      return (
        <>
          <AppHome />
        </>
      );
    } else {
      return (
        <AppIntroSlider
          renderItem={this._renderItem}
          data={introSlider}
          onDone={this._onDone}
          onSkip={this._onSkip}
          dotStyle={{backgroundColor: '#CBD5D7'}}
          activeDotStyle={{backgroundColor: '#5588E7'}}
          renderSkipButton={this._renderSkipButton}
          renderNextButton={this._renderNextButton}
          renderDoneButton={this._renderDoneButton}
          showSkipButton={true}
        />
      );
    }
  }
}

export default AppIntro;
