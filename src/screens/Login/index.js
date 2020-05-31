import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-input';
import SwipeButton from 'rn-swipe-button';

class Login extends Component {
  constructor() {
    super();

    this.state = {
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

  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <ImageBackground source={Images.loginBg} style={styles.bgImage}>
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
                  onSwipeFail={() => this.setState({btn: Images.loginBtnArrow})}
                  onSwipeSuccess={() =>
                    this.props.navigation.navigate('AppHome')
                  }
                  containerStyles={styles.btn}
                  railBackgroundColor={'#ffffff'}
                  railFillBackgroundColor={'#59A3EE'}
                  railFillBorderColor={'#59A3EE'}
                  thumbIconStyles={{borderWidth: 0}}
                  title=""
                />
              </View>
            </View>
            <Text style={styles.socialText}>
              Or connect using social account
            </Text>
          </ImageBackground>
        </View>
      </>
    );
  }
}

export default Login;
