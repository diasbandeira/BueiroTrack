import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Modal, View, Text, Pressable, StyleSheet, TextInput} from 'react-native';
import Points from './Components/Points';
import Photos from './Components/Photos';
import Form from './Components/Form';
import { Switch } from 'react-native';
import CameraView from './Components/CameraView';
import GetLocation from './Components/GetLocation';
export default function App() {
  const [points, setPoints  ] = useState([]);
  const foto = "";
  const [view, setView] = useState('points');
  const [photos, setPhotos] = useState([
    // {id: 1, photo: 'foto 1', uri: './images/foto1.png'},
    // {id: 2, photo: 'foto 1', uri: './images/foto1.png'},
    // {id: 3, photo: 'foto 1', uri: './images/foto1.png'},
    // {id: 4, photo: 'foto 1', uri: './images/foto1.png'},
    // {id: 5, photo: 'foto 1', uri: foto}
  ]);
  
  // const [photos, setPhotos] = useState([]);
  useEffect(() =>{
    console.log(photos)
  }, [photos]);


  const showView = () => {
    switch (view) {
      case 'points':
        return (<Points styles={styles.itemsContainer} points={points} setPoints={setPoints} setView={setView}/>);
        break;
      case 'photos':
        return (<Photos styles={styles.itemsContainer} photos={photos} setView={setView} setPhotos={setPhotos}/>);
        break;
      case 'form':
        return (<Form setPoints={setPoints} setView={setView}/>);
        break;

      default:
        //return (<Text>Nenhum opção selecionada</Text>)
        break;
      }
  }

  return (
    <View style={styles.container}>     
      {/* {showView()} */}
      <GetLocation/>
      <View style={styles.footerContainer}> 
      </View>
      <StatusBar style="auto" />  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  itemsContainer: {
    flex:1, 
    paddingTop: 58,
    height: '500'
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    paddingBottom: 50
  }
});
