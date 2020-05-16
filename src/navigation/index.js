import 'react-native-gesture-handler';
import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Icons} from '../utils';

//Screens
import Home from '../screens/Home';
import Pharmacy from '../screens/Pharmacy';
import Records from '../screens/Records';
import Video from '../screens/Video';

import Profile from '../screens/Profile';
import Offers from '../screens/Offer';
import FindAndBook from '../screens/FindAndBook';
import DoctorCatagories from '../screens/DoctorCatagories';
import TimeSlot1 from '../screens/TimeSlot1';
import TimeSlot2 from '../screens/TimeSlot2';
import TimeSlot3 from '../screens/TimeSlot3';
import DocDetailedCategory from '../screens/DoctorListCategory';
import DocFilteration from '../screens/DoctorFilteration';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function AppHome() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'rgb(85,136,231)',
        style: {height: 65, borderTopRightRadius: 20, borderTopLeftRadius: 20},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.homeIcon} />;
            } else if (focused == false) {
              return <Image source={Icons.homeIcon2} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Pharmacy"
        component={Pharmacy}
        options={{
          tabBarLabel: 'Pharmacy',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.pharmacyIcon2} />;
            } else if (focused == false) {
              return <Image source={Icons.pharmacyIcon} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Records"
        component={Records}
        options={{
          tabBarLabel: 'Records',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.recordsIcon2} />;
            } else if (focused == false) {
              return <Image source={Icons.recordsIcon} />;
            }
          },
        }}
      />
      <Tab.Screen
        name="Video"
        component={Video}
        options={{
          tabBarLabel: 'Video',
          tabBarIcon: ({focused}) => {
            if (focused == true) {
              return <Image source={Icons.videoIcon2} />;
            } else if (focused == false) {
              return <Image source={Icons.videoIcon} />;
            }
          },
        }}
      />
    </Tab.Navigator>
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AppHome"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppHome" component={AppHome} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Offer" component={Offers} />
        <Stack.Screen name="FindBook" component={FindAndBook} />
        <Stack.Screen name="DoctorCategory" component={DoctorCatagories} />
        <Stack.Screen name="TimeSlot1" component={TimeSlot1} />
        <Stack.Screen name="TimeSlot2" component={TimeSlot2} />
        <Stack.Screen name="TimeSlot3" component={TimeSlot3} />
        <Stack.Screen
          name="DocDetailedCategory"
          component={DocDetailedCategory}
        />
        <Stack.Screen name="DocFilteration" component={DocFilteration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
