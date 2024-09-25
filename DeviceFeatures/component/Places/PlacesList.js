import { FlatList, StyleSheet, View, Text } from "react-native";
import { Colors } from "../../constant/colors";
function PlacesList({ places }) {
    if (!places?.length) {
        return <View style={styles.fallbackContainer}>
            <Text style={styles.falblackText}>No Places. Please add some</Text>
        </View>
    }

    return <FlatList data={places}
        key={i => i.id}
        renderItem={({ item }) => <PlaceItem place={item} />} />
}

export default PlacesList;

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
         justifyContent: 'center',
          alignItems: 'center'
    },
    falblackText:{
        fontSize:16,
        color: Colors.primary700
    }
})