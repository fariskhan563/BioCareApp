import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import AppIntroSlider from 'react-native-app-intro-slider';
import PhoneInput from 'react-native-phone-input';
import SwipeButton from 'rn-swipe-button';

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

class Login extends Component {
  constructor() {
    super();

    this.state = {
      showRealApp: false,
      valid: '',
      type: '',
      value: '',
      btn: Images.loginBtnArrow,
    };

    this.updateInfo = this.updateInfo.bind(this);
  }

  updateInfo() {
    this.setState({
      valid: this.phone.isValidNumber(),
      type: this.phone.getNumberType(),
      value: this.phone.getValue(),
    });
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
        <View style={styles.textCont2}>
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
          <View style={styles.wrapper}>
            <ImageBackground source={Images.loginBg} style={styles.bgImage}>
              <KeyboardAvoidingView behavior="padding">
                <ScrollView
                  contentContainerStyle={styles.scrollWrapper}
                  showsVerticalScrollIndicator={false}>
                  <View style={styles.logoCont}>
                    <Image
                      source={Images.loginLogo}
                      style={{width: width * 0.4, height: height * 0.25}}
                    />
                  </View>
                  <View style={styles.textCont}>
                    <Text style={styles.heading}>Get healthy with Biocare</Text>
                    <Text style={styles.subText}>
                      Enter your phone number (required)
                    </Text>
                  </View>
                  <View style={styles.numBtnCont}>
                    <View style={styles.numCont}>
                      <PhoneInput
                        ref={ref => {
                          this.phone = ref;
                        }}
                        initialCountry={'in'}
                        style={styles.countryPicker}
                        textStyle={{fontSize: width * 0.045}}
                        flagStyle={{width: width * 0.1, height: height * 0.04}}
                      />
                    </View>
                    <View style={styles.btnCont}>
                      <SwipeButton
                        thumbIconImageSource={this.state.btn}
                        onSwipeStart={() =>
                          this.setState({btn: Images.loginBtnArrow2})
                        }
                        onSwipeFail={() =>
                          this.setState({btn: Images.loginBtnArrow})
                        }
                        onSwipeSuccess={() =>
                          this.props.navigation.navigate('Otp')
                        }
                        containerStyles={styles.btn}
                        railBackgroundColor={'#ffffff'}
                        railFillBackgroundColor={'#59A3EE'}
                        railFillBorderColor={'#59A3EE'}
                        thumbIconBackgroundColor={'#ffffff'}
                        thumbIconStyles={{borderWidth: 0}}
                        title=""
                      />
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('SocialLogin')
                    }>
                    <Text style={styles.socialText}>
                      Or connect using social account
                    </Text>
                  </TouchableOpacity>
                </ScrollView>
              </KeyboardAvoidingView>
            </ImageBackground>
          </View>
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

export default Login;
