import { View, Text, Pressable, Image, StyleSheet,Platform } from "react-native";
import {useNavigation} from '@react-navigation/native'
import MealDetails from "./MealDetails";

function MealItem({ item }) {
    const navigation = useNavigation();
    return <View style={styles.mealItem}>
        <Pressable android_ripple={{color:'#ccc'}} 
                style={({pressed})=>pressed ? styles.buttonPressed : null}
                onPress={()=>{

                    navigation.navigate('MealDetail', {
                        mealId : item.id
                    })
                }}>
            <View style={styles.innerContainer}>
                <View>
                    <Image source={{ uri: item.imageUrl }} style={styles.image} />
                    <Text style={styles.title}>{item.title}</Text>
                </View>
             <MealDetails item={item}/>
            </View>
        </Pressable>
    </View>
}

export default MealItem;



const styles = StyleSheet.create({
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS ==='android' ? 'hidden' : 'visible',
        backgroundColor: 'white',
        elevation:4,
        shadowColor:'black',
        shadowOpacity:0.5,
        shadowOffset:{width:0, height:2},
        shadowRadius:8,
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAligh: 'center',
        fontSize: 18,
        margin: 8
    },
   
    buttonPressed:{
        opacity:0.5
    },
});