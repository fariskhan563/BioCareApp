import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Screens
import Profile from '../screens/Profile';
import Offers from '../screens/Offer';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
