
import {  StyleSheet, Text, View, Pressable, Image} from 'react-native';

function GoalItem(props){
    return <View style={styles.goalItem}>
        <Pressable onPress={()=>props.onDelete(props.item.key)} android_ripple={{color:'#ccc'}}>
          <Text style={styles.goalText}>{props.item.text}</Text>
        </Pressable>
      </View>
      
}

export default GoalItem

const styles = StyleSheet.create({
    goalItem:{
        margin: 8,
        borderRadius:6,
        backgroundColor: '#5e0acc'
      },
      goalText:{color:'white',   padding:8,}
});