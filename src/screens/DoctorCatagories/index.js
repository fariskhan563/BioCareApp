import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';
import {TextInput} from 'react-native-gesture-handler';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

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
          <SafeAreaView>
            <ScrollView>
              <View>
                <View style={styles.docListWrapper}>
                  <View style={styles.docTypeWrapper}>
                    <Image source={Icons.opthaIcon} />
                    <Text style={styles.specialText}>Opthamologist</Text>
                    <TouchableOpacity
                      onPress={() => {
                        alert('Pressed !!!');
                      }}>
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
                    <Text style={styles.specialText}>
                      Gynecologist/Obstetrician
                    </Text>
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
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </View>
      </>
    );
  }
}

export default DoctorCatagories;
