import { FlatList, View, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderItem(itemData){
    return <ExpenseItem {...itemData.item}/>
}

function ExpensesList({expenses}){
    return <View>
        <FlatList keyExtractor={item=>item.id} data={expenses} renderItem={renderItem}/>
    </View>

}

export default ExpensesList;