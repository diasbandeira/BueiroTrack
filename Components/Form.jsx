import { useState, useMemo } from 'react';
import { SafeAreaView, View, Text, Pressable, StyleSheet, TextInput, CheckBox } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import RadioGroup from 'react-native-radio-buttons-group';

export default function Form({setView}){
    const [text, onChangeText] = useState();
    const Separator = () => <View style={styles.separator} />;

    const radioButtons = useMemo(() => ([
        {
            id: '1', 
            label: 'SUFICIENTE',
            value: 'SUFICIENTE'
        },
        {
            id: '2',
            label: 'INSUFICIENTE',
            value: 'INSUFICIENTE'
        }
    ]), []);

    const tipoObra = useMemo(() => ([
        {
            id: '1', 
            label: 'GREIDE',
            value: 'GREIDE'
        },
        {
            id: '2',
            label: 'GROTA',
            value: 'GROTA'
        }
    ]), []);

    const classificacao = useMemo(() => ([
        {
            id: '1', 
            label: 'BOM',
            value: 'BOM'
        },
        {
            id: '2',
            label: 'REGULAR',
            value: 'REGULAR'
        },
        {
            id: '3',
            label: 'RUIM',
            value: 'RUIM'
        }
    ]), []);

    const ladoMontante = useMemo(() => ([
        {
            id: '1', 
            label: 'BOCA',
            value: 'BOCA'
        },
        {
            id: '2',
            label: 'CX COLETORA',
            value: 'CX COLETORA'
        },
        {
            id: '3',
            label: 'S/ DISPOSITIVO',
            value: 'S/ DISPOSITIVO'
        }
    ]), []);
    const [isSelected, setSelection ] = useState();
    const [selected, setSelected] = useState('');
    const [selectedId, setSelectedId] = useState('');
     
    return (
        <View>
            <Text style={styles.titleForm}>CADASTRO DE OBRAS DE ARTE CORRENTES EXISTENTES</Text> 
            <SafeAreaView  style={styles.container}>
            <View>
                <Text style={styles.title}>Obra Nº:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>          
            <Separator />
            <View>
                <Text style={styles.title}>RODOVIA:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <View>
                <Text style={styles.title}>TRECHO:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>     
            <View>
                <Text style={styles.title}>ESTACA:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>   
            <View>
                <Text style={styles.title}>KM:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>  
            <Separator />
            <View>
                <Text style={styles.title}>TIPO DE OBRA: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>          
            <View>
                <Text style={styles.title}>DIÂMETRO:</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>      
            <View>
                <Text style={styles.title}>TIPO:</Text>
                <RadioGroup   
                    radioButtons={tipoObra} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                />                 
            </View> 
            <Separator />
            <View>
                <Text style={styles.title}>LADO DE MONTANTE: </Text>
                <RadioGroup                    
                    radioButtons={tipoObra} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                /> 
            </View>          
            <View>
                <Text style={styles.title}>ESCONSIDADE: </Text>
                <RadioGroup                    
                    radioButtons={tipoObra} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                /> 
            </View>          
            <Separator />            
            <View>
                <Text   style={styles.title}>COMPRIMENTO: </Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
            </View>
            <View>
                <Text   style={styles.title}>MONTANTE: </Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
            </View>
            <View>
                <Text   style={styles.title}>JUSANTE: </Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>ESTADO DE CONSERVAÇÃO DA OBRA:</Text>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection} 
                        style={styles.checkBox}                   
                    />
                    <Text style={styles.labelCheckBox}>QUEBRADO</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkBox}                       
                    />
                    <Text style={styles.labelCheckBox}>TRINCADO</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}      
                    style={styles.checkBox}              
                />
                <Text style={styles.labelCheckBox}>SELADO</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
					style={styles.checkBox}                    
                />
                <Text style={styles.labelCheckBox}>SEÇÃO ESTRANGULADA</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
					style={styles.checkBox}                    					
                />
                <Text style={styles.labelCheckBox}>INFILTRAÇÃO DE ÁGUA</Text>
                </View>
            </View>    
            <View>
                <Text style={styles.title}>PERDA DE GALVANIZAÇÃO: </Text>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EM CIMA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>NO FUNDO</Text>
				</View>
            </View>
            <View>
                <Text style={styles.title}>CORROSÃO: </Text>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}               
					style={styles.checkBox}     
                />
                <Text style={styles.labelCheckBox}>ASSOREAMENTO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EM CIMA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>NO FUNDO</Text>
				</View>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>CLASSIFICAÇÃO FINAL DO CORPO: </Text>    
                <RadioGroup                    
                    radioButtons={classificacao} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                /> 
            </View>      
            <Separator />
            <View>
                <Text style={styles.title}>LADO MONTANTE: </Text>    
                <RadioGroup                    
                    radioButtons={ladoMontante} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                /> 
            </View> 
            <View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}           
					style={styles.checkBox}         
                />
                <Text style={styles.labelCheckBox}>BOM ESTADO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>QUEBRADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>TRINCADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>DESTRUIDA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>AFOGADO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>SOLEIRA ACIMA DO TERRENO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EROSÃO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ASSOREADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ASSOREADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ENTUPIDA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>NECESSITA LIMPEZA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EXISTE DESCIDA EM DEGRAUS</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>COTA GI </Text>
				</View>
            </View>              
            <Separator />
            <View>
                <Text style={styles.title}>LADO JUSANTE: </Text>    
                <RadioGroup                    
                    radioButtons={ladoMontante} 
                    onPress={setSelectedId}
                    selectedId={selectedId}
                    layout={'row'}
                /> 
            </View> 
            <View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>BOM ESTADO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>QUEBRADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>TRINCADA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>DESTRUIDA</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>AFOGADO</Text>
				</View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>SOLEIRA ACIMA DO TERRENO</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EROSÃO</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ASSOREADA</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ASSOREADA</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>ENTUPIDA</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>NECESSITA LIMPEZA</Text>
                
                </View>
                <View style={styles.checkBoxContainer}>
                <CheckBox
                    value={isSelected}
                    onValueChange={setSelection}                    
					style={styles.checkBox}
                />
                <Text style={styles.labelCheckBox}>EXISTE DESCIDA EM DEGRAUS</Text>
                </View>
                <View style={styles.checkBoxContainer}>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}                    
					style={styles.checkBox}
                    />
                    <Text style={styles.labelCheckBox}>COTA GI </Text>
                </View>
                
            </View>              
            <Separator />
            <View>
                <Text   style={styles.title}>CROQUIS: </Text>
                <Text   style={styles.title}>N: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
                <Text   style={styles.title}>E: </Text>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                />
            </View>
            <Separator />   

            </SafeAreaView>
            <View style={styles.footerContainer}>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        onPress={() => setView('points')}
                    >
                      
                    <FontAwesome
                        name={"arrow-circle-left"}
                        size={38}
                        color="#25292e"

                        />          
                </Pressable>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        onPress={() => setView('points')}
                    >
                        <FontAwesome
                        name={"save"}
                        size={38}
                        color="#25292e"
                        />            
                </Pressable>
                <Pressable
                        //style={[styles.button, { backgroundColor: "#fff" }]}
                        //onPress={onPress}
                    >
                        <FontAwesome
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
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    // optionsRow: {
    //   alignItems: 'center',
    //   flexDirection: 'row',
    // },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white'
    },
    // buttonLabel: {
    //   //color: '#ba',
    //   fontSize: 16,
    // },
    // radioButton: {
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    // },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 20,
    },
    titleForm: {
        textAlign: 'center',
        marginVertical: 8,
        fontSize: 20,
    },
    checkBoxContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    checkBox: {
        alignSelf: 'center'
    },
    labelCheckBox: {
        margin: 8,
    }
  });
  