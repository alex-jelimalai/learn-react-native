
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavoriteContext } from "../store/favorite-context";
import MealList from "../components/MealList";
import { StyleSheet, View, Text } from "react-native";

function FavoritesScreen() {
    const { ids } = useContext(FavoriteContext);

    const favoriteMeals = MEALS.filter(m => ids.includes(m.id));
    if (!favoriteMeals.length) {
        return <View style={styles.container}>
            <Text style={styles.text}>No Favorite Meals selected</Text>
        </View>
    }
    return <MealList data={favoriteMeals} />
}

export default FavoritesScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
});