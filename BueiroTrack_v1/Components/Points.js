
import { View, Text, Pressable, StyleSheet, TextInput, Alert, ScrollView, SectionList} from 'react-native';
// import CircleButton from './CircleButton';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function  Points ({points, setPoints, setView, setPoint}){
   
    const addPoint = () =>{
        
        const id = points.length + 1;
        //console.log('index: ', points);
        setPoints([...points, {
          Id: String(id),
          Name: undefined,
        }]);        
    }
    const onChange = (e) => {
        console.log(e);
        const {value, id} = e.target;
        
        let index = points.findIndex(p => p.Id == id);
        if(index > -1){
            points[index].Name = value;
            setPoints([...points]);
        }
    }
    const openCamera = (id) =>{
        setPoint(id);
        setView('photos');
    }
    return (
        <View 
            //styel={{flex: 1}}
            >   
            <Text style={styles.title}>Registro de Bueiros</Text>   
            <ScrollView>
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
                        //style={styles.circleButton}
                        onPress={() => openCamera(element.Id)}
                    >
                        <Icon name="camera-enhance" size={30} color="#999" />
                    </Pressable>
                    {/*<Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        onPress={() => setView('form')}
                    >
                     <FontAwesome
                        style={styles.input}
                        name={"file-text-o"}
                        size={18}
                        color="#25292e"
                        />             
                        <Text>Form</Text>
                    </Pressable>
                    <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        //onPress={onPress}
                    >
                    {/* <FontAwesome
                        style={styles.input}
                        name={"remove"}
                        size={18}
                        color="#25292e"
                        />             
                        <Text>Excluir</Text>
                    </Pressable> */}
                </View>
                
                )
                )}
            </ScrollView>
            <View style={styles.footerContainer}> 
                <View style={styles.circleButtonContainer}>
                    <Pressable onPress={addPoint} style={styles.circleButton}>
                        <Icon name="add" size={30} />
                    </Pressable>
                </View>
            </View>        
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
        paddingBottom: 50
      },
    input: {
      height: 40,
      padding: 10,
    }, 
    title: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
        padding: 10
    },
    circleButtonContainer: {
        width: 84,
        height: 84,
        marginHorizontal: 60,
        borderRadius: 42,
        padding: 3,
      },
    circleButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#ccc',
        padding: 10,
      },

});