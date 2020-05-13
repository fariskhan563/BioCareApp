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
    image: Images.Banner1,
  },
  {
    id: '2',
    image: Images.Banner2,
  },
];

const doctors = [
  {
    doc_id: '1',
    doc_text: 'Doctors',
    doc_image: Icons.doctorIcon,
    doc_sub_text: 'Ophthalmologist, Dermatologist, etc.',
    screenName: '',
  },
  {
    doc_id: '2',
    doc_text: 'Dentists',
    doc_image: Icons.dentistIcon,
    doc_sub_text: 'Dentist, Prosthodontist, etc.',
    screenName: '',
  },
  {
    doc_id: '3',
    doc_text: 'Alternative Medicine Doctors',
    doc_image: Icons.alternatedocIcon,
    doc_sub_text: 'Ayurveda, Homeopath, etc.',
    screenName: '',
  },
  {
    doc_id: '4',
    doc_text: 'Therapists & Nutritionists',
    doc_image: Icons.therapistIcon,
    doc_sub_text: 'Acupuncturist, Physiotherapist, etc.',
    screenName: '',
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
              renderItem={({item}) => <Image source={item.image} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.DocListWrapper}>
            <FlatList
              data={doctors}
              renderItem={({item}) => (
                <View style={styles.DocSpecsWrapper}>
                  <Image style={styles.docImg} source={item.doc_image} />
                  <View style={styles.docTextWrapper}>
                    <Text style={styles.docText}>{item.doc_text}</Text>
                    <Text style={styles.docSubText}>{item.doc_sub_text}</Text>
                  </View>
                  <TouchableOpacity>
                    <Image style={styles.nextbtn} source={Icons.goIcon} />
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={item => item.doc_id}
            />
            {/* <View style={styles.DocSpecsWrapper}>
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
            </View> */}
          </View>
        </View>
      </>
    );
  }
}

export default FindAndBook;
