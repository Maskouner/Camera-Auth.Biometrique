import { View, Text, Button,PermissionsAndroid,Image,FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CameraRoll from '@react-native-community/cameraroll'


const GalerieUtilisateur = () => {
  const [photos,setPhoto] = useState([])
  const permission = async () => {
    const permission_read = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;
    const permission_write = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    const hasPermission_write = await PermissionsAndroid.check(permission_write);
    const hasPermission_read = await PermissionsAndroid.check(permission_read);
    console.log(hasPermission_read)
    console.log(hasPermission_write)
     getGalerie()

    const status = await PermissionsAndroid.requestMultiple([permission_write, permission_read])
      return status === 'granted';
    
       

       
  }
  

  const getGalerie = async () => {
    await CameraRoll.getPhotos({
        first: 10,
        assetType: 'Photos',
        groupName: 'Camera',
    })
        .then(result => {
            setPhoto(result);
        })
        .catch((err) => {
            console.log('fail loading photos', err);
        });
};

useEffect(() => {
 permission()
},[])

console.log(photos?.edges)



 
return(
  <ScrollView style={{flex:1}}>

    <View style={{flexDirection:'row',flex:1}}>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[0].node.image.uri}}/>
      </View>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[1].node.image.uri}}/>
      </View>
    </View>

    <View style={{flexDirection:'row',flex:1}}>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[2].node.image.uri}}/>
      </View>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[3].node.image.uri}}/>
      </View>
    </View>

    <View style={{flexDirection:'row',flex:1}}>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[4].node.image.uri}}/>
      </View>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[5].node.image.uri}}/>
      </View>
    </View>

    <View style={{flexDirection:'row',flex:1}}>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[6].node.image.uri}}/>
      </View>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[7].node.image.uri}}/>
      </View>
    </View>

    <View style={{flexDirection:'row',flex:1}}>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[8].node.image.uri}}/>
      </View>
      <View style={{flex:0.5,justifyContent:'center'}}>
      <Image style={{height:200,width:200,alignSelf:'center'}}  source={{ uri : photos.edges?.[9].node.image.uri}}/>
      </View>
    </View>

  </ScrollView>
 
  
  

  
  
)





}

export default GalerieUtilisateur