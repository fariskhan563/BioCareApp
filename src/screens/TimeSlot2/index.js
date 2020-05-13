import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

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
                <View style={styles.backIconWrapper}>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}>
                    <Image source={Icons.BackIcon} />
                  </TouchableOpacity>
                </View>
                <View style={styles.imageWrapper}>
                  <Text style={styles.uName}>Select a time slot</Text>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    alert('Cities');
                  }}>
                  <View style={styles.dropdownWrapper}>
                    <Text style={styles.dropdownSelectedText}>South Delhi</Text>
                    <Image
                      style={styles.dropdownImg}
                      source={Icons.dropDownIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            </LinearGradient>
            <View style={styles.cardWrapper}>
              <View style={styles.docSpecsWrapper}>
                <Image style={styles.docImage} source={Images.Profile2} />
                <View style={styles.docNameSpecsText}>
                  <Text style={styles.docNameText}>Dr. John Terry</Text>
                  <Text style={styles.docSubNameText}>
                    B.Sc, MBBS, DDVL, MD- Dermitologist
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
                  <Text style={styles.timeText}>04.00</Text>
                </View>
              </View>
              <View style={styles.timecardWrapper}>
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
                  <Text style={styles.timeText}>08.00</Text>
                  <Text style={styles.timeText}>09.00</Text>
                </View>
              </View>
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
                  onPress={() => alert('Book Pressed')}>
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
