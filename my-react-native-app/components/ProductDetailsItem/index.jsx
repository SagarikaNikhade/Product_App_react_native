import {View,Text,StyleSheet} from "react-native";

export default function ProductDetailsItem(detailData){
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{detailData.title}</Text>
            <Text style={styles.textStyle}>{detailData.description}</Text>
            <Text style={styles.textStyle}>{detailData.price}</Text>
            <Text style={styles.textStyle}>{detailData.rating}</Text>
            <Text style={styles.textStyle}>{detailData.brand}</Text>
            <Text style={styles.textStyle}>{detailData.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:30,
        paddingHorizontal:15,
        borderWidth:1,
        margin:10,
        borderColor:"#88da9e"
    },
    textStyle:{
        color:"white",
        fontSize:20,
        padding:12
    }
  });