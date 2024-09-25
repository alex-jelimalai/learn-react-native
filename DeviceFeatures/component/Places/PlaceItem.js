import { View,Image, Pressable, StyleSheet } from "react-native";

function PlaceItem({place, onSelect}){
    return <Pressable onPress={onSelect}>
        <View>
        <Image source={place.imageUri}/>
        <View>
            <Text>{place.title}</Text>
            <Text>{place.address}</Text>
        </View>
    </View>
    </Pressable>
}

export default PlaceItem;

const styles = StyleSheet.create({

})