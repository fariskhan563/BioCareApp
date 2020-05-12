import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Profile from '../screens/Profile';
import Offers from '../screens/Offer';
import FindAndBook from '../screens/FindAndBook';
import DoctorCatagories from '../screens/DoctorCatagories';
import TimeSlot3 from '../screens/TimeSlot3';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Offer" component={Offers} />
        <Stack.Screen name="FindBook" component={FindAndBook} />
        <Stack.Screen name="DoctorCategory" component={DoctorCatagories} />
        <Stack.Screen name="TimeSlot3" component={TimeSlot3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;