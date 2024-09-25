import { Button, View, Image, Text, StyleSheet } from "react-native";
import { launchCameraAsync } from "expo-image-picker";
import { useState } from "react";
import { Colors } from "../../constant/colors";
import OutlineButton from "../ui/OutlineButton";

function ImagePicker() {
    const [pickedImage, setPickedImage] = useState();
    async function imageHandler() {
        const image = await launchCameraAsync({ allowsEditing: true, aspect: [16, 9], quality: 0.5 });
        setPickedImage(image?.assets[0]?.uri);
    }

    var imageUri = <Text>No Image yet</Text>;
    if (imageUri) {

        imageUri = pickedImage;
    }

    return <View>
        <View style={styles.imagePreview}>
            <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
        <OutlineButton icon="camera" onPress={imageHandler} >Take image</OutlineButton>
    </View>
}

export default ImagePicker;

const styles = StyleSheet.create({
    imagePreview: {
        width: '100%',
        height: 200,
        marginVertical: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary100,
        borderRadius: 4
    },
    image: {
        width: '100%',
        height: '100%',
    }
})