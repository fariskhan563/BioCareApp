import React, {Component} from 'react';
import {Text, View} from 'react-native';

import styles from './style';

import BackIcon from '../../utils/svg/backIcon.svg';

//Libraries
import LinearGradient from 'react-native-linear-gradient';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <LinearGradient
            colors={['#5588e7', '#75e4f7']}
            start={{x: 0.16, y: 0.16}}
            end={{x: 0.8, y: 0.8}}
            locations={[0.16, 0.8]}
            style={styles.upperCont}>
            <Text style={styles.buttonText}>Sign in with Facebook</Text>
          </LinearGradient>
          {/* <View style={styles.upperCont} /> */}
          <View style={styles.lowerCont} />
        </View>
      </View>
    );
  }
}

export default Profile;
