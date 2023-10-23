import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, Pressable, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import CameraView from './Components/CameraView';
import Button from './Components/Button';
import ImageViewer from './Components/ImageViewer';
import CircleButton from './Components/CircleButton';
import IconButton from './Components/IconButton';
import EmojiPicker from './Components/EmojiPicker';
import EmojiList from './Components/EmojiList';
import Form from './Components/Form';
const PlaceholderImage = require('./assets/images/background-image.png');
//const PlaceholderImage = null;
export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showAppOptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleCamera = () => {
    setShowCamera(!showCamera);
  }
  
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,      
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert('You did not select any image.');
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
  };

  const onSaveImageAsync = async () => {
    // we will implement this later
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };


  return (
    <View style={styles.container}>
        <View style={showAppOptions ? styles.imageContainerBackground : styles.imageContainer}>      
          {/* <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectedImage} /> */}
        </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}>
          <Form/>
        </View>
      ) : (<>
        
        <View style={styles.footerContainer}>
         <Button theme="primary" label="Escolher uma foto" onPress={pickImageAsync} />
         {showCamera ? <CameraView/> : <View />}
          <Button
            label="Utilizar esta foto"            
            onPress={() => setShowAppOptions(true)}
          />
        </View></>
      )}
       {/* <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker> */}
    
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex:1, 
    paddingTop: 58,
  },
  imageContainerBackground: {
    flex:1, 
    paddingTop: 58,    
    opacity: 0.1,
    
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  optionsContainer: {
    position: "absolute",
    bottom: 80,
  },
  optionsRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
