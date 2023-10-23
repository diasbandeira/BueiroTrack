import React, { useEffect, useState } from "react";
import { Alert, Platform, Text, View,  } from 'react-native';
import * as Location from 'expo-location';

export default function GetLocation (){
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let {status, canAskAgain} = await Location.requestForegroundPermissionsAsync();
            
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                setErrorMsg(status);
                return;
              }
            let location = await Location.getCurrentPositionAsync();
            setLocation(location);
        })();
    }, []);

    let text = 'Aguardando...';
    if(errorMsg){
        text = errorMsg;
    }else if(location){
        text = JSON.stringify(location);
    }


    return (
    <View> 
        <Text>Registro de Bueiros</Text> 
        <Text>{text}</Text>

    </View>)
}