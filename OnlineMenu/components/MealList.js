import { View, FlatList,StyleSheet } from "react-native";
import MealItem from './MealItem'

function renderMealItem(itemData) {
    return <MealItem item={itemData.item}/>
}


function MealList({data}){
    return <View style={styles.container}>
        <FlatList data={data} key={m => m.id} renderItem={renderMealItem} />
    </View>
}

export default MealList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});