import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Offers from '../screens/Offer';
import FindAndBook from '../screens/FindAndBook';
import DoctorCatagories from '../screens/DoctorCatagories';
import TimeSlot1 from '../screens/TimeSlot1';
import TimeSlot2 from '../screens/TimeSlot2';
import TimeSlot3 from '../screens/TimeSlot3';
import DocDetailedCategory from '../screens/DoctorListCategory';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
