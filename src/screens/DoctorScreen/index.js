import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class DoctorScreen extends Component {
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
              <View style={styles.titleWrapper} />
              <View style={styles.settingIconWrapper} />
            </View>
          </LinearGradient>

          <View style={styles.boxCont1}>
            <View style={styles.profileImgCont}>
              <View style={styles.profileTextWrap}>
                <Text style={styles.docText}>Prime</Text>
              </View>
              <View style={styles.profileImgWrap}>
                <Image source={Images.Profile} style={styles.docImage} />
              </View>
              <View style={styles.profileTextWrap}>
                <Image source={Images.starImg} style={{marginRight: 5}} />
                <Text style={[styles.docText, {marginRight: 5}]}>4.2</Text>
              </View>
            </View>
            <Text style={styles.docName}>Dr. John Terry</Text>
            <Text style={styles.docDesc}>
              B.Sc, MBBS, DDVL, MD-Dermatologist
            </Text>
            <View style={styles.docInfoWrap}>
              <Text style={[styles.docInfoText, {color: '#898A8F'}]}>
                <Text style={styles.docInfoText}>16 </Text>
                yrs. Experience
              </Text>
              <Text style={[styles.docInfoText, {color: '#898A8F'}]}>
                <Text style={styles.docInfoText}>89% </Text>
                (4384 votes)
              </Text>
            </View>
            <View style={styles.docImgsWrap}>
              <Image
                source={Images.docProfileImages}
                style={styles.docProfileImages}
              />
            </View>
          </View>

          <View style={styles.boxScrollCont}>
            <ScrollView
              contentContainerStyle={styles.scrollWrapper}
              showsVerticalScrollIndicator={false}>
              <View style={styles.boxUpper}>
                <View style={styles.upperInfoWrapper}>
                  <Text style={styles.docText}>In Clinic Fees : $900</Text>
                </View>

                <LinearGradient
                  colors={['#5588e7', '#75e4f7']}
                  start={{x: 0.1, y: 0.1}}
                  end={{x: 0.3, y: 1.9}}
                  locations={[0.1, 0.6]}
                  style={styles.boxBtn2}>
                  <Text style={[styles.btnText, {color: '#ffffff'}]}>Book</Text>
                </LinearGradient>
              </View>
              <View style={styles.boxDate}>
                <Text style={[styles.dateText, {color: '#FF4D4D'}]}>
                  Closed Today
                </Text>
                <Text style={styles.dateText}>9:30AM - 8:00PM</Text>
                <Text style={[styles.dateText, {color: '#3A58FC'}]}>
                  All Timing
                </Text>
              </View>
              <View style={styles.boxMap}>
                <View style={styles.boxMapUpper}>
                  <Image source={Icons.locationIcon} />
                  <Text style={styles.mapText}>
                    P-13, South Extension Part 2, New Delhi, Delhi 110049
                  </Text>
                </View>
                <View style={styles.boxMapLower}>
                  <Image source={Images.mapImage} style={styles.mapImage} />
                </View>
              </View>
              <View style={styles.textBoxWrapper}>
                <Text style={styles.docText2}>FEEDBACK</Text>
                <Text style={styles.docText2}>
                  Very good . courteous and efficient staff.
                </Text>
                <Text
                  style={[
                    styles.docInfoText,
                    {color: '#898A8F', marginLeft: 10},
                  ]}>
                  Jitu Raut . 2 years ago
                </Text>
                <Text style={styles.docText2}>ALL FEEDBACK</Text>
              </View>
              <View style={styles.textBoxWrapper}>
                <Text style={styles.docText2}>SERVICES</Text>
                <Text style={styles.docText2}>Ophthalmology</Text>
                <Text style={styles.docText2}>Glucoma</Text>
                <Text style={styles.docText2}>Cataract</Text>
                <Text style={styles.docText2}>ALL SERVICES</Text>
              </View>
              <View style={styles.textBoxWrapper}>
                <Text style={styles.docText2}>SPECIALIZATION</Text>
                <Text style={styles.docText2}>Dermatologist</Text>
                <Text style={styles.docText2}>Trichologist</Text>
                <Text style={styles.docText2}>Cosmetologist</Text>
              </View>
              <View style={styles.verificationBox}>
                <View style={styles.verifyIndicator}>
                  <View style={styles.colorIndicator} />
                  <Text style={styles.docText2}>VERIFICATION DONE FOR</Text>
                </View>
                <Text style={styles.docText2}>- Medical License</Text>
              </View>

              <View style={styles.boxLower}>
                <View style={styles.boxLowerCont1}>
                  <Image source={Images.Profile} style={styles.userImage} />
                </View>
                <View style={styles.boxLowerCont2}>
                  <Text style={[styles.docProfileText, {marginTop: 15}]}>
                    Dr. Sandeep Mehta
                  </Text>
                  <Text style={styles.docDesc}>Dermatologist</Text>
                  <Text style={styles.docProfileText}>$ 900</Text>
                </View>
                <View style={styles.boxLowerCont3}>
                  <Image source={Images.starImg} style={{marginRight: 5}} />
                  <Text style={styles.dateText}>4.2</Text>
                </View>
              </View>

              <View style={styles.boxLower2}>
                <View style={styles.boxLowerCont1}>
                  <Image source={Images.Profile} style={styles.userImage} />
                </View>
                <View style={styles.boxLowerCont2}>
                  <Text style={[styles.docProfileText, {marginTop: 15}]}>
                    Dr. Sandeep Mehta
                  </Text>
                  <Text style={styles.docDesc}>Dermatologist</Text>
                  <Text style={styles.docProfileText}>$ 900</Text>
                </View>
                <View style={styles.boxLowerCont3}>
                  <Image source={Images.starImg} style={{marginRight: 5}} />
                  <Text style={styles.dateText}>4.2</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          <View style={styles.bfbottomWrapper}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => alert('Feedback Pressed')}>
              <Text style={styles.feedbackTextbtn}>Give Feedback</Text>
            </TouchableOpacity>
            <LinearGradient
              colors={['#5588e7', '#75e4f7']}
              start={{x: 0.1, y: 0.1}}
              end={{x: 0.3, y: 1.9}}
              locations={[0.1, 0.6]}
              style={styles.bookTextbtnWrapper}>
              <TouchableOpacity
                activeOpacity={1}
                style={styles.bookBtn}
                onPress={() => this.props.navigation.navigate('TimeSlot1')}>
                <Text style={[styles.bookTextbtn, {color: '#ffffff'}]}>
                  Book
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  }
}

export default DoctorScreen;
