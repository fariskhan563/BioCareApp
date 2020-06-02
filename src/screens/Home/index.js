import React, {Component} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
const {width} = Dimensions.get('window');
import styles from './style';

import {Icons, Images} from '../../utils';

//Libraries
import LinearGradient from 'react-native-linear-gradient';

const iconItems = [
  {
    cat_id: '1',
    image: Images.DocHomeImg,
    title: 'Doctor',
    desc: 'Search doctor around you',
    screen: 'FindBook',
  },
  {
    cat_id: '2',
    image: Images.MedicineHomeImg,
    title: 'Medicines',
    desc: 'Order medicine home',
    screen: 'FindBook',
  },
  {
    cat_id: '3',
    image: Images.DiagnosticHomeImg,
    title: 'Diagnostic',
    desc: 'Book test at doorstep',
    screen: 'FindBook',
  },
  {
    cat_id: '4',
    image: Images.DocHomeImg,
    title: 'Doctor',
    desc: 'Search doctor around you',
    screen: 'FindBook',
  },
  {
    cat_id: '5',
    image: Images.MedicineHomeImg,
    title: 'Doctor',
    desc: 'Search doctor around you',
    screen: 'FindBook',
  },
  {
    cat_id: '6',
    image: Images.DiagnosticHomeImg,
    title: 'Doctor',
    desc: 'Search doctor around you',
    screen: 'FindBook',
  },
];

const dots = [
  {
    b_id: '1',
  },
  {
    b_id: '2',
  },
];

const banners = [
  {
    banner_id: '1',
    image: Images.Banner2,
  },
  {
    banner_id: '2',
    image: Images.Banner1,
  },
  {
    banner_id: '3',
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

class Home extends Component {
  scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView

  render() {
    let position = Animated.divide(this.scrollX, width);

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
                <TouchableOpacity
                  style={styles.userNameWrapper}
                  activeOpacity={1}
                  onPress={() => this.props.navigation.navigate('Profile')}>
                  <Text style={styles.uName}>Hi Elizabeth!</Text>
                </TouchableOpacity>
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
              <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={iconItems}
                pagingEnabled={true}
                // the onScroll prop will pass a nativeEvent object to a function
                onScroll={Animated.event(
                  // Animated.event returns a function that takes an array where the first element...
                  [{nativeEvent: {contentOffset: {x: this.scrollX}}}], // ... is an object that maps any nativeEvent prop to a variable
                )} // in this case we are mapping the value of nativeEvent.contentOffset.x to this.scrollX
                scrollEventThrottle={16} // this will ensure that this ScrollView's onScroll prop is called no faster than 16ms between each function call
                renderItem={({item}) => (
                  <View style={styles.iconItemsWrapper}>
                    <View style={styles.sliderItemWrapper}>
                      <TouchableOpacity
                        activeOpacity={1}
                        onPress={() =>
                          this.props.navigation.navigate(item.screen)
                        }
                        style={styles.itemImgWrapper}>
                        <Image source={item.image} style={styles.itemImg} />
                      </TouchableOpacity>
                      <Text style={styles.itemText}>{item.title}</Text>
                      <Text style={styles.subText}>{item.desc}</Text>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.cat_id}
              />

              <View style={styles.scrollIndicatorWrapper}>
                {dots.map((_, i) => {
                  // the _ just means we won't use that parameter
                  let opacity = position.interpolate({
                    inputRange: [i - 1, i, i + 1], // each dot will need to have an opacity of 1 when position is equal to their index (i)
                    outputRange: [0.3, 1, 0.3], // when position is not i, the opacity of the dot will animate to 0.3
                    // inputRange: [i - 0.50000000001, i - 0.5, i, i + 0.5, i + 0.50000000001], // only when position is ever so slightly more than +/- 0.5 of a dot's index
                    // outputRange: [0.3, 1, 1, 1, 0.3], // is when the opacity changes from 1 to 0.3
                    extrapolate: 'clamp', // this will prevent the opacity of the dots from going outside of the outputRange (i.e. opacity will not be less than 0.3)
                  });
                  return (
                    <Animated.View // we will animate the opacity of the dots so use Animated.View instead of View here
                      key={i} // we will use i for the key because no two (or more) elements in an array will have the same index
                      style={{
                        opacity,
                        height: 8,
                        width: 8,
                        backgroundColor: '#5588E7',
                        margin: 8,
                        borderRadius: 5,
                      }}
                    />
                  );
                })}
                {/* <View style={styles.scrollIndicatorBig} />
                <View style={styles.scrollIndicatorSmall} />
                <View style={styles.scrollIndicatorSmall} /> */}
              </View>
            </View>
          </View>
          <View style={styles.BannerWrapper}>
            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={banners}
              renderItem={({item}) => (
                <View style={styles.bannerImgWrapper}>
                  <Image source={item.image} style={styles.bannerImg} />
                </View>
              )}
              keyExtractor={item => item.banner_id}
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
                <TouchableOpacity
                  style={styles.docItemWrapper}
                  activeOpacity={1}
                  onPress={() =>
                    this.props.navigation.navigate('DoctorScreen')
                  }>
                  <View style={styles.docItemUpper}>
                    <Image
                      source={item.doc_img}
                      style={{width: '100%', height: '100%', borderRadius: 50}}
                    />
                  </View>
                  <View style={styles.docItemLower}>
                    <View style={styles.docItemLowerShadowWrap}>
                      <View style={styles.docItemLowerWrap}>
                        <Text style={[styles.docName, {marginTop: 0}]}>
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
                </TouchableOpacity>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </>
    );
  }
}

export default Home;
