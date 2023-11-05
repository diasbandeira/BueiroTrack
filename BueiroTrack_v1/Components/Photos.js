
import React, { useState, useEffect } from "react";
import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView} from 'react-native';
import ImageViewer from "./ImageViewer";
import CameraView from "./CameraView";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Photos({setView}){
    const [photos, setPhotos] = useState([]);
    useEffect(()=> {
        console.log('photos: ', photos);
    }, [photos]);

    return(
        <View>
            
            {/* <Text style={styles.title}>Registro de Bueiros</Text>    */}
            <View>
                {photos.length > 0 &&photos.map((photo) => (
                    <ImageViewer key={photo.id} id={photo.id} uri={photo.uri} />                    
                ))}
            </View>
            <View>
                <CameraView setPhotos={setPhotos} photos={photos}/>
            </View>
            <View 
                style={styles.footerContainer}
                > 
                <Pressable
                    //style={styles.circleButton}
                    onPress={() => setView('points')}
                >                      
                    {/* <FontAwesome
                        style={styles.input}
                        name={"arrow-circle-left"}
                        size={38}
                        color="#25292e"
                        />           */}
                        {/* <Text>Voltar</Text> */}
                        <Icon name="arrow-back" size={30} style={styles.input}/>

                </Pressable>
                <Pressable
                        //style={styles.circleButton}
                        onPress={() => setView('points')}
                    >
                        {/* <FontAwesome
                        style={styles.input}
                        name={"camera"}
                        size={38}
                        color="#25292e"
                        />      */}
                        {/* <Text>Camera</Text>     */}
                        <Icon name="edit-road" size={30} style={styles.input}/>   
                </Pressable>
                <Pressable
                        //style={styles.circleButton}
                        onPress={() => setView('points')}
                    >
                        {/* <FontAwesome
                        style={styles.input}
                        name={"question-circle"}
                        size={38}
                        color="#25292e"
                        />             */}
                        <Icon name="info" size={30} style={styles.input}/>
                        {/* <Text>Duvidas</Text> */}
                </Pressable>
            </View>
            </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, 
    input: {
        
        height: 40,
        padding: 10,
        
    }, 
});