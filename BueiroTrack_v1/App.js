/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Points from './Components/Points';
import Photos from './Components/Photos';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';



function App(){
  const [view, setView] = useState('points');
  const [points, setPoints] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [point, setPoint] = useState({});
  const isDarkMode = useColorScheme() === 'dark';
  useEffect(()=> {
    let arrayPhotos = points.filter(p => point === p.id);
    if(arrayPhotos.length > 0)
      setPhotos(arrayPhotos);
    
  },[point])

  const showView = () => {
    switch (view) {
      case 'points':
        return (<Points styles={styles.itemsContainer} points={points} setPoints={setPoints} setView={setView} setPoint={setPoint}/>);
        break;
      case 'photos':
        return (<Photos styles={styles.itemsContainer} points={points} setPoints={setPoints} setView={setView} photos={photos} setPhotos={setPhotos} point={point} />);
        break;
      // case 'form':
      //   return (<Form styles={styles.itemsContainer} points={points} setPoints={setPoints} setView={setView}/>);
      //   break;

      default:
        return (<Text>Nenhuma opção selecionada</Text>)
        break;
      }
  }

  return (
    <View 
      //style={styles.container}
      >
      {showView()}
      <View 
        //style={styles.footerContainer}
        > 
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  footerContainer: {
    //flex: 1 / 3,
    alignItems: 'center',
    paddingBottom: 50
  }
});

export default App;
