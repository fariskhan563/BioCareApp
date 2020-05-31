import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class TimeSlot1 extends Component {
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

          <View style={styles.boxCont1}>
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
            <View style={styles.boxLower}>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>Today, 8 dec</Text>
                <Image source={Icons.goIconWhite} style={{marginRight: 10}} />
              </View>
              <Text style={[styles.description, {marginTop: 20}]}>
                No slots available for today
              </Text>
              <LinearGradient
                colors={['#5588e7', '#75e4f7']}
                start={{x: 0.1, y: 2}}
                end={{x: 1.5, y: 1.9}}
                locations={[0.1, 0.6]}
                style={[styles.boxBtn2, {marginTop: 20}]}>
                <Text style={[styles.btnText, {color: '#ffffff'}]}>
                  Next day availability on Sun, 09
                </Text>
              </LinearGradient>
              <Text style={[styles.description, {marginTop: 20}]}>OR</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TimeSlot2')}>
                <Image source={Icons.goIconBig} style={{marginTop: 15}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default TimeSlot1;
