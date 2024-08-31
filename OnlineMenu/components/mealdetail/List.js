import { View,StyleSheet, Text } from "react-native";

function List({data}){
    return data.map(st => 
        <View key={st} style={styles.listItem}>
            <Text style={styles.itemText}>{st}</Text>
        </View>)
}

export default List;


const styles = StyleSheet.create({
    listItem: {
        borderRadius: 8,
        paddingHorizontal:6, 
        paddingVertical:8,
        marginVertical:4,
        marginHorizontal:12,
        backgroundColor:'#e2b497'
    },
    itemText:{
        color:'#351401',
        textAlign:'center'
    }
  });
  