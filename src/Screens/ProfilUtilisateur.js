import { StyleSheet, Text, View, Image, Button, Pressable,Modal } from 'react-native'
import React, { useCallback, useState } from 'react'
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';




const ProfilUtilisateur = () => {
  
  const [response, setResponse] = useState(null);
  

  
   
    async function ImagePicker(){
      const result = await launchImageLibrary({
        selectionLimit: 1,
        mediaType: 'photo',
        includeBase64: false,
    },setResponse)
    }

    async function CameraPicker(){
      const result = await launchCamera({
        cameraType: 'front',
        includeBase64: false,
    },setResponse)
    
    }

    const uri = response?.assets && response.assets[0].uri;

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Image style={{height:'50%',width:'100%'}}  source={uri ? { uri } : {uri : 'https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg'}  }/>
      <Button title='image' onPress={() => ImagePicker()}/>
      <Button title='camera' onPress={() => CameraPicker()}/>
    </View>
  )
}

export default ProfilUtilisateur

const styles = StyleSheet.create({
});