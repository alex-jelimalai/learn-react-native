import { View, FlatList, StyleSheet } from "react-native"
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealItem from "../components/MealItem";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displauedMeals = MEALS.filter(m => m.categoryIds.includes(catId))

    function renderMealItem(itemData) {
        return <MealItem item={itemData.item}/>
    }

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.filter(c => c.id === catId)[0]?.title
        navigation.setOptions({ title:categoryTitle });
    
    },[catId, navigation])

    return <View style={styles.container}>
        <FlatList data={displauedMeals} key={m => m.id} renderItem={renderMealItem} />
    </View>
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});