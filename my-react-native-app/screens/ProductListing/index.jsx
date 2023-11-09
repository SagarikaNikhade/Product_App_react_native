import { useContext } from "react";
import {View,Text, ActivityIndicator,StyleSheet, FlatList} from "react-native";
import { Context } from "../../context";
import ProductListItem from "../../components/ProductListItem";
import { useNavigation } from "@react-navigation/native";

export default function ProductListing(){
    const {loading,product} = useContext(Context);
    const navigation = useNavigation();

    const handleOnPress = (getId) =>{
        navigation.navigate("ProductDetails",{
            productId : getId
        })
    }

    if(loading){
        return(
            <ActivityIndicator style={styles.loader} color="red" size={"large"}/>
        )
    }
    return (
        <View>
            <FlatList
            data={product}
            renderItem={(el)=>(
                <View style={styles.itemContainer}> 
                    {/* <Text style={styles.itemText}>{el.item.title}</Text> */}
                    <ProductListItem 
                    title={el.item.title}
                    onPress={()=>handleOnPress(el.item.id)}
                    />
                </View>)}
            keyExtractor={(el)=>el.id}
            numColumns={2}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    loader : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    // css
    itemContainer: {
        flex: 1,
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        backgroundColor: 'green',
      },
      itemText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
      },
  });