import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { Text, View, Image, StyleSheet,ScrollView ,Button} from "react-native";
import SubTitle from "../components/mealdetail/SubTitle";
import List from "../components/mealdetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const meal = MEALS.find(m => m.id == mealId);

  function handleHeaderButton(){
    console.log("Hit me")
  }
  useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=>{
          return <IconButton icon='star' onPress={handleHeaderButton} color='white'/> 
        }
      })
  },[navigation,handleHeaderButton]);


 

  return <ScrollView style={styles.root}>
    <Image source={{ uri: meal.imageUrl }} style={styles.image} />
    <Text style={styles.title}>{meal.title}</Text>
    <MealDetails item={meal} textStyle={styles.textDetailsStyle} />
    <View style={styles.listOuterContainer}>
      <View style={styles.listContainer}>
        <SubTitle>Igridients</SubTitle>
        <List data={meal.ingredients} />
        <SubTitle>Steps</SubTitle>
        <List data={meal.steps} />
      </View>
    </View>
  </ScrollView>
}

export default MealDetailScreen;


const styles = StyleSheet.create({
  root:{
    marginBottom:32
  },
  image: {
    width: '100%',
    height: 350
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },
  textDetailsStyle: {
    color: 'white'
  },
  listContainer:{
    maxWidth: '80%',
  },
  listOuterContainer:{
    alignItems:'center'
  }
});


