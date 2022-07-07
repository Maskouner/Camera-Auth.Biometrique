import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfilUtilisateur from '../Screens/ProfilUtilisateur';
import GalerieUtilisateur from '../Screens/GalerieUtilisateur';
import LoginScreen from '../Screens/LoginScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Profil" component={ProfilUtilisateur} />
      <Tab.Screen name="Galerie" component={GalerieUtilisateur} />
      <Tab.Screen name="Login" component={LoginScreen} />
    </Tab.Navigator>
  </NavigationContainer>
  )
}

export default TabNavigation