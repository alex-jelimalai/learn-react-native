import {  StyleSheet, TextInput, View, Button, Modal, Image} from 'react-native';
import { useState } from 'react';



function GoalInput (props){
    const [enteredGoalText, setEnteredGoalText ]  = useState('');

    function goalInputHandler(enteredText) { 
        setEnteredGoalText(enteredText)
    }

    return <Modal animationType='slide' visible={props.visible}>
         <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/favicon.png')}/>
            <TextInput placeholder='Your course goal' style={styles.textInput} onChangeText={goalInputHandler} value={enteredGoalText} />
            <View style={styles.buttonContainer}>
          
                <View style={styles.button}>
                <Button title='Add goal.'  disabled={!enteredGoalText} color={"#5e0acc"}  onPress={()=>{
                    props.onAdd(enteredGoalText);
                    setEnteredGoalText('')
                }}/>
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onClose} color={"#f31282"}/>
                </View>
              
                 </View>  
        </View>
    </Modal>
}

export default GoalInput;


const styles = StyleSheet.create({
   
    inputContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      padding:16,
      backgroundColor:'#311b6b'
    },
    image:{
        width:100,
        height:100,
        margin:20
    },
    textInput: {
      borderWidth: 1,
      borderColor: '#e4d0ff',
      width: '100%',
      marginRight: 8,
      padding: 8,
      borderRadius:6,
      padding:16,
      backgroundColor:'#e4d0ff'
    },
    buttonContainer:{
        marginTop:16,
        flexDirection:'row'
    },

    button:{
       width:100,
       marginHorizontal:8
    }
   
  });