import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class Offers extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <LinearGradient
            colors={['#5588e7', '#75e4f7']}
            start={{x: 0.16, y: 0.1}}
            end={{x: 1.1, y: 1.1}}
            locations={[0.16, 50]}
            style={styles.upperCont}>
            <View style={styles.upperWrapper}>
              <TouchableOpacity
                style={styles.backIconWrapper}
                activeOpacity={1}
                onPress={() => this.props.navigation.goBack()}>
                <Image source={Icons.BackIcon} />
              </TouchableOpacity>
              <View style={styles.imageWrapper}>
                <Text style={styles.uName}>Offers</Text>
              </View>
              <View style={styles.settingIconWrapper} />
            </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <View style={styles.boxUpper}>
              <Text style={styles.title}>
                Chat with General Physician @ $99
              </Text>
              <Text style={styles.description}>
                Cold, fever, cough or flu? Chat with a doctor now.
              </Text>
            </View>
            <View style={styles.boxLower}>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn1}>
                <View style={styles.boxBtn11}>
                  <Text style={styles.code}>CPTHF</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn2}>
                <Text style={[styles.btnText, {color: '#ffffff'}]}>Avail</Text>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.boxCont2}>
            <View style={styles.boxUpper}>
              <Text style={styles.title}>
                Get 50% off on complete medical checkup
              </Text>
              <Text style={styles.description}>
                Cold, fever, cough or flu? Chat with a doctor now.
              </Text>
            </View>
            <View style={styles.boxLower}>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn1}>
                <View style={styles.boxBtn11}>
                  <Text style={styles.code}>ZXSDC</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn2}>
                <View style={styles.boxBtn22}>
                  <Text style={styles.btnText}>Avail</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.boxCont3}>
            <View style={styles.boxUpper}>
              <Text style={styles.title}>Buy 1 get 1 service</Text>
              <Text style={styles.description}>
                Book any appointment and get next appointment free of cost.
              </Text>
            </View>
            <View style={styles.boxLower}>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn1}>
                <View style={styles.boxBtn11}>
                  <Text style={styles.code}>XSDCF</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn2}>
                <View style={styles.boxBtn22}>
                  <Text style={styles.btnText}>Avail</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.boxCont4}>
            <View style={styles.boxUpper}>
              <Text style={styles.title}>
                Paytm $100 cashback on online pay.
              </Text>
              <Text style={styles.description}>
                Do your payment via Paytm wallet and get $100 cahback in 72Hr.
              </Text>
            </View>
            <View style={styles.boxLower}>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 1.1, y: 1.1}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn1}>
                <View style={styles.boxBtn11}>
                  <Text style={styles.code}>AZZFY</Text>
                </View>
              </LinearGradient>

              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.boxBtn2}>
                <View style={styles.boxBtn22}>
                  <Text style={styles.btnText}>Avail</Text>
                </View>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Offers;
