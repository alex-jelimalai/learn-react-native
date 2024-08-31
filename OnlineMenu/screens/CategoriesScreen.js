import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";
import CategoryGreenTile from "../components/CategoryGridTile";


function CategoriesScreen ({navigation}){
   
    function renderCategoryItem(itemData){
        function onPressHandler(){
            navigation.navigate('MealsOverview', {
                categoryId : itemData.item.id
            })
        }
        return <CategoryGreenTile title={itemData.item.title} color={itemData.item.color} onPress={onPressHandler}/>
    }

    
    return <FlatList data={CATEGORIES} 
                     keyExtractor={item=>item.id} 
                     renderItem={renderCategoryItem}
                     numColumns={2}/>
}

export default CategoriesScreen; 


