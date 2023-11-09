import {View,Text,StyleSheet,Image} from "react-native";

export default function ProductDetailsItem({detailData}){
    //  console.log(detailData,"detailData")
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Title:-  {detailData.title}</Text>
            <Text style={styles.textStyle}>Description:-  {detailData.description}</Text>
            <Text style={styles.textStyle}>Price:-  {detailData.price}</Text>
            <Text style={styles.textStyle}>Rating:-  {detailData.rating}</Text>
            <Text style={styles.textStyle}>Brand:-  {detailData.brand}</Text>
            <Text style={styles.textStyle}>Category:-  {detailData.category}</Text>
            {/* <Image source={{ uri: detailData.images[0] }} style={styles.itemImage} /> */}
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
    },
    itemImage: {
        width: 100,
        height: 100,
      },
  });