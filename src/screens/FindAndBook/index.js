import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, FlatList} from 'react-native';

import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-gesture-handler';

const banners = [
  {
    id: '1',
    name: Images.Banner1,
  },
  {
    id: '2',
    name: Images.Banner2,
  },
];

class FindAndBook extends Component {
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
                  <Text style={styles.uName}>Find & Book</Text>
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
          <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={banners}
              renderItem={({item}) => <Image source={item.name} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.DocListWrapper}>
            <View style={styles.DocSpecsWrapper}>
              <Image style={styles.docImg} source={Icons.doctorIcon} />
              <View style={styles.docTextWrapper}>
                <Text style={styles.docText}>Doctors</Text>
                <Text style={styles.docSubText}>
                  Ophthalmologist, Dermatologist, etc.
                </Text>
              </View>
              <TouchableOpacity>
                <Image style={styles.nextbtn} source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.DocSpecsWrapper}>
              <Image style={styles.docImg} source={Icons.dentistIcon} />
              <View style={styles.docTextWrapper}>
                <Text style={styles.docText}>Dentists</Text>
                <Text style={styles.docSubText}>
                  Dentist, Prosthodontist, etc. {'               '}
                </Text>
              </View>
              <TouchableOpacity>
                <Image style={styles.nextbtn} source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.DocSpecsWrapper}>
              <Image style={styles.docImg} source={Icons.alternatedocIcon} />
              <View style={styles.docTextWrapper}>
                <Text style={styles.docText}>Alternative Medicine Doctors</Text>
                <Text style={styles.docSubText}>
                  Ayurveda, Homeopath, etc. {'               '}
                </Text>
              </View>
              <TouchableOpacity>
                <Image style={styles.nextbtn} source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
            <View style={styles.DocSpecsWrapper}>
              <Image style={styles.docImg} source={Icons.therapistIcon} />
              <View style={styles.docTextWrapper}>
                <Text style={styles.docText}>Therapists & Nutritionists</Text>
                <Text style={styles.docSubText}>
                  Acupuncturist, Physiotherapist, etc.
                </Text>
              </View>
              <TouchableOpacity>
                <Image style={styles.nextbtn} source={Icons.goIcon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default FindAndBook;
