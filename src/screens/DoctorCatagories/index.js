import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput, FlatList} from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';

const doctors = [
  {
    cat_id: '1',
    cat_img: Icons.opthaIcon,
    cat_name: 'Opthamologist',
    screenName: 'TimeSlot1',
  },
  {
    cat_id: '2',
    cat_img: Icons.dermoIcon,
    cat_name: 'Dermatologist',
    screenName: 'TimeSlot2',
  },
  {
    cat_id: '3',
    cat_img: Icons.cardioIcon,
    cat_name: 'Cardiologist',
    screenName: 'TimeSlot3',
  },
  {
    cat_id: '4',
    cat_img: Icons.gastroIcon,
    cat_name: 'Gastroenterologist',
    screenName: '',
  },
  {
    cat_id: '5',
    cat_img: Icons.pychoIcon,
    cat_name: 'Psychiatrist',
    screenName: '',
  },
  {
    cat_id: '6',
    cat_img: Icons.earIcon,
    cat_name: 'Ear-Nose-Throat (ENT) Specialist',
    screenName: '',
  },
  {
    cat_id: '7',
    cat_img: Icons.gynoIcon,
    cat_name: 'Gynecologist/Obstetricia',
    screenName: '',
  },
  {
    cat_id: '8',
    cat_img: Icons.neuroIcon,
    cat_name: 'Neurologist',
    screenName: '',
  },
];

class DoctorCatagories extends Component {
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
                  <Text style={styles.uName}>Doctors</Text>
                </View>
                <View style={styles.settingIconWrapper} />
              </View>
            </LinearGradient>
            <View style={styles.inputWrapper}>
              <Image source={Icons.searchIcon} />
              <TextInput
                style={styles.searchinp}
                placeholder="Doctors, specialities, clinics"
              />
            </View>
          </View>
          <View style={styles.topText}>
            <Text style={styles.texthead}>Top Specialities</Text>
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={doctors}
              renderItem={({item}) => (
                <View style={styles.docTypeWrapper}>
                  <Image style={styles.doccatImg} source={item.cat_img} />
                  <Text style={styles.specialText}>{item.cat_name}</Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate(item.screenName)
                    }>
                    <Image source={Icons.goIcon} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.cat_id}
            />
          </View>
        </View>
        {/* <View style={styles.docListWrapper}>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.opthaIcon} />
              <Text style={styles.specialText}>Opthamologist</Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TimeSlot1')}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.dermoIcon} />
              <Text style={styles.specialText}>Dermatologist</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('TimeSlot3');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.cardioIcon} />
              <Text style={styles.specialText}>Cardiologist</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.gastroIcon} />
              <Text style={styles.specialText}>Gastroenterologist</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.pychoIcon} />
              <Text style={styles.specialText}>Psychiatrist</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.earIcon} />
              <Text style={styles.specialText}>
                Ear-Nose-Throat (ENT) Specialist
              </Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.gynoIcon} />
              <Text style={styles.specialText}>Gynecologist/Obstetrician</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.docTypeWrapper}>
              <Image source={Icons.neuroIcon} />
              <Text style={styles.specialText}>Neurologist</Text>
              <TouchableOpacity
                onPress={() => {
                  alert('Pressed !!!');
                }}>
                <Image source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
          </View> */}
      </>
    );
  }
}

export default DoctorCatagories;
