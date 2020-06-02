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
import LinearGradient from 'react-native-linear-gradient';
import SwipeButton from 'rn-swipe-button';
import OTPInputView from '@twotalltotems/react-native-otp-input';

class Otp extends Component {
  constructor() {
    super();

    this.state = {
      btn: Images.otpBtnArrow,
    };
  }

  render() {
    return (
      <>
        <View style={styles.wrapper}>
          <KeyboardAvoidingView behavior="padding">
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <ImageBackground source={Images.otpBg} style={styles.bgImage}>
                <View style={styles.upperCont}>
                  <TouchableOpacity
                    style={styles.arrowCont}
                    onPress={() => this.props.navigation.goBack()}>
                    <Image source={Icons.BackIcon2} />
                  </TouchableOpacity>
                </View>
                <View style={styles.logoCont}>
                  <Image
                    source={Images.otpLogo}
                    style={{width: width * 0.57, height: height * 0.32}}
                  />
                </View>
                <View style={styles.textCont}>
                  <Text style={styles.heading}>Enter verification code</Text>
                  <Text style={styles.subText}>
                    Enter the OTP sent to +91 9899910001
                  </Text>
                </View>
                <View style={styles.numBtnCont}>
                  <View style={styles.otpCont}>
                    <OTPInputView
                      style={{width: '100%', height: '100%'}}
                      pinCount={4}
                      // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                      // onCodeChanged = {code => { this.setState({code})}}
                      autoFocusOnLoad
                      codeInputFieldStyle={styles.underlineStyleBase}
                      codeInputHighlightStyle={styles.underlineStyleHighLighted}
                      onCodeFilled={code => {
                        alert(`Code is ${code}, you are good to go!`);
                      }}
                    />
                  </View>
                  <View style={styles.resendCont}>
                    <Text style={styles.socialText}>
                      Don't receive OTP? RESEND OTP
                    </Text>
                  </View>
                  <View style={styles.btnCont}>
                    <SwipeButton
                      thumbIconImageSource={this.state.btn}
                      onSwipeStart={() =>
                        this.setState({btn: Images.otpBtnArrow2})
                      }
                      onSwipeFail={() =>
                        this.setState({btn: Images.otpBtnArrow})
                      }
                      onSwipeSuccess={() =>
                        this.props.navigation.navigate('AppIntro')
                      }
                      containerStyles={styles.btn}
                      railBackgroundColor={'#ffffff'}
                      railFillBackgroundColor={'#F09819'}
                      railFillBorderColor={'#F09819'}
                      thumbIconBackgroundColor={'#ffffff'}
                      thumbIconStyles={{borderWidth: 0}}
                      title=""
                    />
                  </View>
                </View>
              </ImageBackground>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  }
}

export default Otp;
