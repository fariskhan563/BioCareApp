import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import ProgressBar from 'react-native-progress/Bar';

class Video extends Component {
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
              <View style={styles.backIconWrapper}>
                {/* <TouchableOpacity
                  onPress={() => this.props.navigation.goBack()}>
                  <Image source={Icons.BackIcon} />
                </TouchableOpacity> */}
              </View>
              <View style={styles.imageWrapper}>
                <Text style={styles.uName}>Video</Text>
              </View>
              <View style={styles.settingIconWrapper} />
            </View>
          </LinearGradient>
        </View>
      </View>
    );
  }
}

export default Video;
