import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, Alert} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <LinearGradient
            colors={['#5588e7', '#75e4f7']}
            start={{x: 0.16, y: 0.16}}
            end={{x: 0.8, y: 0.8}}
            locations={[0.16, 5]}
            style={styles.upperCont}>
            <View style={styles.upperWrapper}>
              <View style={styles.backIconWrapper}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity>
              </View>
              <View style={styles.imageWrapper}>
                <Image source={Images.Profile} style={styles.image} />
              </View>
              <View style={styles.settingIconWrapper}>
                <Image source={Icons.SettingIcon} />
              </View>
            </View>
            <View style={styles.midWrapper}>
              <Text style={styles.uName}>Elizabeth</Text>
              <Text style={[styles.uNum, {marginTop: 3}]}>+91 78383540420</Text>
            </View>
            <Text style={[styles.uNum, {marginTop: 6, marginBottom: 2}]}>
              22%
            </Text>
            <ProgressBar
              progress={0.55}
              width={300}
              height={5}
              borderRadius={20}
              color={'#FFFFFF'}
              unfilledColor={'rgba(0, 0, 0, 0.1)'}
              borderWidth={5}
              borderColor={'rgba(0, 0, 0, 0.1)'}
            />
            <View style={styles.lowerWrapper}>
              <Text style={styles.uNum}>Complete your profile</Text>
            </View>
          </LinearGradient>

          <View style={styles.lowerCont}>
            <View style={styles.itemWrapper}>
              <Image source={Icons.myDoctor} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My Doctors</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('FindBook')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.calendarIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Appointments</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DoctorCategory')
                }>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.onlineConsultIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Online consultation</Text>
              </View>
              <Image source={Icons.goIcon} />
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.medicalRecordIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Medical records</Text>
              </View>
              <Image source={Icons.goIcon} />
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.reminderIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Reminders</Text>
              </View>
              <Image source={Icons.goIcon} />
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.healthInterestIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Health interest</Text>
              </View>
              <Image source={Icons.goIcon} />
            </View>

            <View style={styles.itemWrapper}>
              <Image source={Icons.paymentIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>My payments</Text>
              </View>
              <Image source={Icons.goIcon} />
            </View>

            <View style={styles.itemWrapperLast}>
              <Image source={Icons.offerIcon} />
              <View style={styles.middleItemWrap}>
                <Text style={styles.itemName}>Offers</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Offer')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Profile;
