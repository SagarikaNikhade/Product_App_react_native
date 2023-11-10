import { View, Text, StyleSheet, Pressable } from "react-native";

export default function FavouriteItem({ title, reason,handleRemoveFav,id }) {

    return (
        <View style={styles.FavouriteItemContainer}>
            <Pressable onPress={()=>handleRemoveFav(id)}>
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.text}>{reason}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    FavouriteItemContainer: {
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#0f0782",
        marginBottom: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        paddingBottom: 10
    }
})