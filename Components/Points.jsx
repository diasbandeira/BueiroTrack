import React from "react";
import { View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import CircleButton from './CircleButton';
import { FontAwesome } from '@expo/vector-icons';


export default function  Points ({points, setPoints, setView}){
    const addPoint = () =>{
        const id = points.length + 1;
        //console.log('index: ', points);
        setPoints([...points, {
          Id: id,
          Name: undefined,
        }]);
    }
    const onChange = (e) => {
        console.log(e);
        const {value, id} = e.target;
        let index = points.findIndex(p => p.Id == id);
        points[index].Name = value;
        setPoints([...points]);
    }

    return (
        <View>   
            <Text style={styles.title}>Registro de Bueiros</Text>        
            {points.map(element =>
            (
            <View 
                key={element.Id}
                style={{
                flexDirection: 'row',
                borderWidth: 0,
                padding: 0,              
                margin: 12,
                }}
            >
                <Text style={styles.input}> {element.Id} - </Text>
                <TextInput
                style={styles.input}
                onChange={(e) => onChange(e)}
                id={element.Id}
                value={element.Name}
                placeholder={`Descrição do Ponto - ${element.Id}`}
                //keyboardType="numeric"
                />
                <Pressable
                    //style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={() => setView('photos')}
                >
                <FontAwesome
                    style={styles.input}
                    name={"camera"}
                    size={18}
                    color="#25292e"
                    />            
                </Pressable>
                <Pressable
                    //style={[styles.button, { backgroundColor: "#fff" }]}
                    onPress={() => setView('form')}
                >
                <FontAwesome
                    style={styles.input}
                    name={"file-text-o"}
                    size={18}
                    color="#25292e"
                    />            
                </Pressable>
                <Pressable
                    //style={[styles.button, { backgroundColor: "#fff" }]}
                    //onPress={onPress}
                >
                <FontAwesome
                    style={styles.input}
                    name={"remove"}
                    size={18}
                    color="#25292e"
                    />            
                </Pressable>
            </View>
            
            )
            )}
            <View style={styles.footerContainer}> 
            <CircleButton onPress={addPoint}/>
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    // },
    // pointsContainer: {
    //   flex:1, 
    //   paddingTop: 58,
    // },
    footerContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    // label: {
    //   color: 'black',
    //   fontSize: 16,
    // },
    input: {
      height: 40,
      padding: 10,
    }, 
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
});