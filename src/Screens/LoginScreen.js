
import React, { useEffect, useState } from 'react';
import { StyleSheet,Text, TouchableOpacity, Image, View,Modal,Alert } from 'react-native';

import ReactNativeBiometrics from 'react-native-biometrics'

const LoginScreen = () => {
  const rnBiometrics = new ReactNativeBiometrics()

  const createTwoButtonAlert = () =>
    Alert.alert(
      "INFORMATION",
      "Vous vous êtes connectes avec succées",
      [
        { text: "Retour", onPress: () => console.log("Retour Pressed") }
      ]
    );

  const Touch = () => {

    rnBiometrics.simplePrompt({promptMessage: 'Confirmer votre emprunt'})
    .then((resultObject) => {
      const { success } = resultObject
  
      if (success) {
        console.log('successful biometrics provided')
        createTwoButtonAlert()
     
      } else {
        console.log('user cancelled biometric prompt')
      }
    })
    .catch(() => {
      console.log('biometrics failed')
    })
  }



  return (
    <View>
    <TouchableOpacity style={styles.btn} onPress={() => Touch()}>
      <Text style={styles.txtSun}>CONNEXION</Text>
    </TouchableOpacity>
    </View>
 
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },
  btn: {
    alignSelf:'center',
    marginTop:250,
    height: 200,
    width: 200,
    overflow: 'hidden',
    borderRadius: 260,
    backgroundColor: '#840EF4',
    
  },
  txtSun: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop:85,
    marginLeft:43,
    position: 'absolute'
  }
});