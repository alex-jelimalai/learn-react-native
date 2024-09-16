
import { CATEGORIES, MEALS } from "../data/dummy-data"
import MealList from "../components/MealList";
import { useLayoutEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displauedMeals = MEALS.filter(m => m.categoryIds.includes(catId))

  

    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.filter(c => c.id === catId)[0]?.title
        navigation.setOptions({ title:categoryTitle });
    
    },[catId, navigation])

    return <MealList data={displauedMeals}/>
}

export default MealsOverviewScreen;

