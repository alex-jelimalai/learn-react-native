import {StyleSheet,Text, Platform} from 'react-native'
import Colors from "../../constants/colors";

function Title({children}){
    return <Text style={styles.title}>{children}</Text>
}
export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontFamily:'open-sans-bold',
        color: 'white',
        textAlign:'center',
        borderWidth:Platform.OS === 'android' ? 1 : 2,
        borderColor: 'white',
        padding:12,
        maxWidth:'80%',
        width:300
    }
})
