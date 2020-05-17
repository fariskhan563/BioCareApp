import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';

class TimeSlot3 extends Component {
  render() {
    return (
      <>
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
                <View style={styles.titleWrapper}>
                  <Text style={styles.uName}>Select a time slot</Text>
                </View>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.settingIconWrapper}
                  onPress={() => {
                    alert('Pressed !!!');
                  }}>
                  <Text style={styles.dropName}>South Delhi</Text>
                  <Image source={Icons.dropDownIcon} />
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <View style={styles.cardWrapper}>
              <View style={styles.boxUpper}>
                <View style={styles.imageWrapper}>
                  <Image source={Images.Profile} style={styles.image} />
                </View>
                <View style={styles.boxInfo}>
                  <Text style={styles.title}>Dr. John Terry</Text>
                  <Text style={styles.description}>
                    B.Sc, MBBS, DDVL, MD-Dermatologist
                  </Text>
                </View>
              </View>
              <View style={styles.docDTFWrapper}>
                <View style={styles.dtfmWrapper}>
                  <Text style={styles.dtfText}>Date & Time</Text>
                  <Text style={styles.dtfSubText}>Tomorrow, 9 Dec 4.45PM</Text>
                </View>
                <View style={styles.dtfWrapper}>
                  <Text style={styles.dtfText}>Consultation Fees</Text>
                  <Text style={styles.dtfSubText}>₹ 900</Text>
                </View>
              </View>
              <View style={styles.inputTextWrapper}>
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="default"
                  placeholder="Name"
                />
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="email-address"
                  placeholder="E-mail"
                />
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="phone-pad"
                  placeholder="Number"
                />
              </View>
              <Text style={styles.bookText}>
                By booking this appointment you agree to the{' '}
                <Text style={styles.tcText}>T&C</Text>
              </Text>
            </View>
            <View style={styles.bfbottomWrapper}>
              <Text style={styles.feedbackTextbtn}>Give Feedback</Text>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.3, y: 1.9}}
                locations={[0.1, 0.6]}
                style={styles.bookTextbtnWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  style={styles.bookBtn}
                  // onPress={() => this.props.navigation.navigate('ClinicalScreen')}
                >
                  <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                    Book
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default TimeSlot3;
