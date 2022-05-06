import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const onClickHandler = () => {
    setName('Style test is done')
  }




  return (
    <View style={styles.container}>
      <Text style={styles.text}> My first app</Text>
      
      <Text style={styles.newText}> Feature 1</Text>
      <TextInput 
        style={styles.input} 
        placeholder='INSIRA OS DADOS'
        keyboardType='numeric'
        maxLength={5}
      />
       

      <Text style={styles.newText}> Feature 2</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.newText}> Feature 3</Text>
      <TextInput style={styles.input}/>

      <Text style={styles.newText}> Feature 4</Text>
      <TextInput style={styles.input}/>
      
      <StatusBar style="auto" />
      
      
      <Button 
        title='ENVIAR' 
        onPress={onClickHandler}>  
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flex: 1,
    backgroundColor: '#0000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color:'#000000',
    fontSize: 40,
    fontStyle: 'italic',
    margin: 10,
  },
  newText: {
    color:'#000000',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 20,
  },
  input: {
    width: 200,
    margin:10,
    borderLeftWidth: 2,
    borderColor: '#555',
    borderRadius: 15,
    overflow: 'hidden',
    textAlign:'center'
  }
});
