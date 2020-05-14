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
    image: Images.Banner2,
  },
  {
    id: '2',
    image: Images.Banner1,
  },
  {
    id: '3',
    image: Images.Banner2,
  },
];

const doctors = [
  {
    doc_id: '1',
    doc_img: Images.doc1Img,
    doc_name: 'Dr. Alina James',
    doc_desc: ' B.Sc, MBBS, DDVL, MD- Dermitologist',
    doc_rating: '4.2',
  },
  {
    doc_id: '2',
    doc_img: Images.doc2Img,
    doc_name: 'Dr. Steve Robert',
    doc_desc: ' B.Sc, MBBS, DDVL',
    doc_rating: '3.6',
  },
  {
    doc_id: '3',
    doc_img: Images.doc1Img,
    doc_name: 'Dr. Alina James',
    doc_desc: ' B.Sc, MBBS, DDVL, MD- Dermitologist',
    doc_rating: '4.2',
  },
  {
    doc_id: '4',
    doc_img: Images.doc2Img,
    doc_name: 'Dr. Steve Robert',
    doc_desc: ' B.Sc, MBBS, DDVL',
    doc_rating: '3.6',
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
                <TouchableOpacity
                  style={styles.profileImgWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Image
                    source={Images.userFemale}
                    style={{width: '100%', height: '100%', borderRadius: 50}}
                  />
                </TouchableOpacity>
                <View style={styles.userNameWrapper}>
                  <Text style={styles.uName}>Hi Elizabeth!</Text>
                </View>
                <View style={styles.searchOptionWrapper}>
                  <Image source={Icons.searchHomeIcon} />
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
              </View>
            </LinearGradient>
            <View style={styles.iconSliderWrapper}>
              <View style={styles.iconItemsWrapper}>
                <View style={styles.sliderItemWrapper}>
                  <Image source={Images.DocHomeImg} />
                  <Text style={styles.itemText}>Doctor</Text>
                  <Text style={styles.subText}>Search doctor around you</Text>
                </View>
                <View style={styles.sliderItemWrapper}>
                  <Image source={Images.MedicineHomeImg} />
                  <Text style={styles.itemText}>Medicines</Text>
                  <Text style={styles.subText}>Order medicine to home</Text>
                </View>
                <View style={styles.sliderItemWrapper}>
                  <Image source={Images.DiagnosticHomeImg} />
                  <Text style={styles.itemText}>Diagnostic</Text>
                  <Text style={styles.subText}>Book test at doorstep</Text>
                </View>
              </View>
              <View style={styles.scrollIndicatorWrapper}>
                <View style={styles.scrollIndicatorBig} />
                <View style={styles.scrollIndicatorSmall} />
                <View style={styles.scrollIndicatorSmall} />
                <View style={styles.scrollIndicatorSmall} />
              </View>
            </View>
          </View>
          <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={banners}
              renderItem={({item}) => (
                <View style={{marginLeft: 20}}>
                  <Image source={item.image} />
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.docHeadingWrapper}>
            <View style={styles.docTextBar}>
              <Text style={[styles.docText, {color: '#5588E7'}]}>
                Doctors nearby you
              </Text>
              <Text style={[styles.docText, {color: 'rgb(85,136,231)'}]}>
                See All
              </Text>
            </View>
          </View>
          <View style={styles.docListWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={doctors}
              renderItem={({item}) => (
                <View style={styles.docItemWrapper}>
                  <View style={styles.docItemUpper}>
                    <Image
                      source={item.doc_img}
                      style={{width: '100%', height: '100%', borderRadius: 50}}
                    />
                  </View>
                  <View style={styles.docItemLower}>
                    <View style={styles.docItemLowerShadowWrap}>
                      <View style={styles.docItemLowerWrap}>
                        <Text style={[styles.docName, {marginTop: 15}]}>
                          {item.doc_name}
                        </Text>
                        <View style={styles.docDescWrapper}>
                          <Text style={styles.docDesc}>{item.doc_desc}</Text>
                        </View>
                        <View style={[styles.ratingWrapper, {marginTop: 0}]}>
                          <Image source={Images.starImg} />
                          <Text
                            style={[
                              styles.docText,
                              {marginLeft: 8, color: '#898A8F'},
                            ]}>
                            {item.doc_rating}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={styles.bottomTabWrapper}>
            <View style={styles.tabWrapper}>
              <View style={styles.singleTabWrapper}>
                <Image source={Icons.homeIcon} style={{marginTop: 10}} />
                <Text
                  style={[
                    styles.tabText,
                    {marginTop: 6, color: 'rgb(85,136,231)'},
                  ]}>
                  Home
                </Text>
              </View>
              <View style={styles.singleTabWrapper}>
                <Image source={Icons.pharmacyIcon} style={{marginTop: 10}} />
                <Text style={[styles.tabText, {marginTop: 6}]}>Pharmacy</Text>
              </View>
              <View style={styles.singleTabWrapper}>
                <Image source={Icons.recordsIcon} style={{marginTop: 10}} />
                <Text style={[styles.tabText, {marginTop: 6}]}>Records</Text>
              </View>
              <View style={styles.singleTabWrapper}>
                <Image source={Icons.videoIcon} style={{marginTop: 10}} />
                <Text style={[styles.tabText, {marginTop: 6}]}>Video</Text>
              </View>
            </View>
          </View>
        </View>
      </>
    );
  }
}

export default FindAndBook;
