import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';

class TimeSlot2 extends Component {
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
              <View style={styles.datechangeWrapper}>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => alert('Left Pressed')}>
                  <Image style={styles.leftdate} source={Icons.LeftDateIcon} />
                </TouchableOpacity>
                <Text style={styles.dateText}>Tomorrow, 9 Dec</Text>
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => alert('Right Pressed')}>
                  <Image
                    style={styles.rightdate}
                    source={Icons.RightDateIcon}
                  />
                </TouchableOpacity>
              </View>

              <ScrollView
                contentContainerStyle={styles.scrollWrapper}
                showsVerticalScrollIndicator={false}>
                <View style={styles.timecardWrapper}>
                  <LinearGradient
                    colors={['#FFFB91', '#FF9FFF']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Morning
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <Text style={styles.timeText}>10.00</Text>
                    <Text style={styles.timeText}>11.00</Text>
                    <Text style={styles.timeText}>12.00</Text>
                  </View>
                </View>
                <View style={styles.timecardWrapper}>
                  <LinearGradient
                    colors={['#E0CCFF', '#C1FFF1']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Afternoon
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <Text style={styles.timeText}>12.00</Text>
                    <Text style={styles.timeText}>01.00</Text>
                    <Text style={styles.timeText}>02.00</Text>
                    <Text style={styles.timeText}>03.00</Text>
                  </View>
                </View>
                <View style={styles.timecardWrapperBig}>
                  <LinearGradient
                    colors={['#90E4FF', '#9FFFF5']}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.3, y: 1.9}}
                    locations={[0.1, 0.6]}
                    style={styles.morningTextbtnWrapper}>
                    <Text style={[styles.morningTextbtn, {color: '#000'}]}>
                      Evening & Night
                    </Text>
                  </LinearGradient>
                  <View style={styles.timeseqWrapper}>
                    <Text style={styles.timeText}>05.00</Text>
                    <Text style={styles.timeText}>06.00</Text>
                    <Text style={styles.timeText}>07.00</Text>
                    <Text style={styles.timeText}>03.00</Text>
                  </View>
                  <View style={styles.timeseqWrapperLast}>
                    <Text style={styles.timeText}>05.00</Text>
                    <Text style={styles.timeText}>06.00</Text>
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
                  onPress={() => this.props.navigation.navigate('TimeSlot3')}>
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

export default TimeSlot2;
