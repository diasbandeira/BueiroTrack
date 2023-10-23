import React, {useState, useRef} from "react";
import { View, Pressable, StyleSheet, Touchable, TouchableOpacity, Text} from 'react-native';
import ImageViewer from "./ImageViewer";
const PlaceholderImage = require('../assets/images/background-image.png');
import { FontAwesome } from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";
import CameraView from "./CameraView";

export default function Photos({photos, setView, setPhotos}){
    const [permission, requestPermission] = Camera.useCameraPermissions();
    console.log('photos: ',photos )
    const [hasPermission, setHasPermission] = useState();
    const cameraRef = useRef(null);

    const startCamera = async () => {
        const {status} = await Camera.requestCameraPermissionsAsync();
        setHasPermission(status === 'granted');
    }

    if(hasPermission === null)
        return <Text>is null</Text>
    if(hasPermission === false)
        return <Text>Sem permissão</Text>
    
    return (
        <View>
            <View>
                {photos.map((photo) => (
                    <ImageViewer key={photo.id} id={photo.id} uri={photo.uri} />                    
                ))}
            </View>
            <View>
                <CameraView setPhotos={setPhotos} photos={photos}/>
            </View>
            <View style={styles.footerContainer}>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        onPress={() => setView('points')}
                    >                      
                    <FontAwesome
                        style={styles.input}
                        name={"arrow-circle-left"}
                        size={38}
                        color="#25292e"
                        />          
                </Pressable>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        //onPress={() => setView('points')}
                    >
                        <FontAwesome
                        style={styles.input}
                        name={"camera"}
                        size={38}
                        color="#25292e"
                        />            
                </Pressable>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        //onPress={onPress}
                    >
                        <FontAwesome
                        style={styles.input}
                        name={"question-circle"}
                        size={38}
                        color="#25292e"
                        />            
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        
        height: 40,
        padding: 10,
        
    },  
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
});
