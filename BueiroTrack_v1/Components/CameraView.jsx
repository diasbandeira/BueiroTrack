import { useEffect, useState, useRef } from 'react';
// import { Camera, CameraType } from 'expo-camera';
//import {Camera } from react-native-vision-camera

import { Button, StyleSheet, Text, TouchableOpacity, View, Pressable, Image, Alert, Linking } from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { Camera } from 'react-native-vision-camera.';

export default function CameraView({photos, setPhotos}) {
  // const [type, setType] = useState(CameraType.back);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  // console.log('requestPermission: ', requestPermission);
  // let camera=  Camera;
  // const toggleCameraType = () => {
  //   // if(!camera) return;

  //   // const photo = await Camera.takePictureAsync();
  //   // console.log(photo);
  //   setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  // }
  // const startCamera = async () => {
  //   const {status} = await requestPermission();
  //   if (status === 'granted') {
  //     // start the camera
  //     //setStartCamera(true)
  //   } else {
  //     Alert.alert('Access denied')
  //   }
      
  // }

  const camera = useRef(null);
  const devices = Camera.getAvailableCameraDevices();
  const device = devices.find((d) => d.position === 'back');

  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  
useEffect(() => {
  async function getPermission(){
    
    const permission = await Camera.requestCameraPermission();
    console.log(`Status da camera: ${permission}`);
    if(permission === 'denied')
      await Linking.openSettings();
  }
  getPermission();
},[]);

  const capturePhoto = async () => {
    console.log('capture photo...')
    if (camera.current !== null) {
      const photo = await camera.current.takePhoto({});
      if(photo != null){
        setImageSource(photo.path);
        setPhotos([...photos, {
          id: photos.length + 1,
          uri: photo.path
        }])
        setShowCamera(false);
        console.log(photo.path);
      }
      
    }
  };


  // if (device == null) {
  //   return <Text>Camera not available</Text>;
  // }

  console.log('showCamera: ' , showCamera)
  return (
    <View 
    //style={styles.container} 
    >
        <Camera
          style={{height: '90%', width: '100%'}}
          //style={StyleSheet.absoluteFill}
          ref={camera}
          device={device}
          isActive={showCamera}
          photo={true}
        />
        {/* <Pressable 
                style={styles.button} 
                onPress={() => capturePhoto()}>
                <Text style={styles.text}>Foto</Text>
              </Pressable> */}
        <View 
            //</Camera>style={styles.buttonContainer}
            >
              <Pressable 
                //style={{flex: 1, justifyContent: 'center'}} 
                onPress={() => capturePhoto()}>
                {/* <Text style={styles.text}>Foto</Text> */}
                <Icon name="camera-enhance" size={30} />
              </Pressable>
          </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderColor: 'white',
  },
  camera: {
    flex: 1
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
});

