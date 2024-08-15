import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, View , FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible ]  = useState(false);

  
  const [courseGoals, setCourseGoals ]  = useState([]);

 

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentGoals=>[...currentGoals, {text:enteredGoalText, key: Math.random().toString()}]);
    setModalIsVisible(false);
   }


  function deleteGoalHandler(id) {
    setCourseGoals(currentGoals=>currentGoals.filter(g=>g.key!=id))
   }


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5a0ecc" onPress={()=>setModalIsVisible(true)}/>
      <GoalInput onAdd={addGoalHandler} visible={modalIsVisible} onClose={()=>setModalIsVisible(false)}/>
      <View style={styles.goalsContainer}>
       <FlatList data={courseGoals} renderItem={itemData => <GoalItem item={itemData.item} onDelete={deleteGoalHandler}/>}/>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },


  goalsContainer: {
    flex: 5
  },
  
});
