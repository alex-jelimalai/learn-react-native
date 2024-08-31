import { View, Text, StyleSheet} from "react-native";
function SubTitle({children}){
    return  <View style={styles.subTitleContainer}>
    <Text style={styles.subtitle}>{children}</Text>
  </View>;
}

export default SubTitle ;


const styles = StyleSheet.create({
    subtitle: {
      color: '#e2b497',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    subTitleContainer: {
      marginHorizontal: 12,
      marginVertical: 4,
      padding: 6,
      borderBottomColor: '#e2b497',
      borderBottomWidth: 2
    }
  });
  
  
  