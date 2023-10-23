import { useEffect, useState } from 'react';
import { Camera, CameraType } from 'expo-camera';

import { Button, StyleSheet, Text, TouchableOpacity, View, Alert, Image, ImageBackground } from 'react-native';

export default function CameraView({photos, setPhotos}) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  console.log('requestPermission: ', requestPermission);
  let camera=  Camera;
  const toggleCameraType = () => {
    // if(!camera) return;

    // const photo = await Camera.takePictureAsync();
    // console.log(photo);
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  const startCamera = async () => {
    const {status} = await requestPermission();
    if (status === 'granted') {
      // start the camera
      //setStartCamera(true)
    } else {
      Alert.alert('Access denied')
    }
      
  }

  const takePicture = async () => {
      await startCamera();
      const photo = await camera.takePictureAsync();
      console.log('photo: ', photo);
      setPhotos([...photos, {id: photos.length + 1, photo: 'name', uri: photo.uri}]);
  }
  return (
    <View style={styles.container}>
       
        <Camera 
          style={styles.camera} 
          type={type}
          ref={(r) => {
            camera = r
          }}
          >
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Text style={styles.text}>Foto</Text>
            </TouchableOpacity>
          </View>
        </Camera>
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
    flex: 1,
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
    color: 'white',
  },
});
