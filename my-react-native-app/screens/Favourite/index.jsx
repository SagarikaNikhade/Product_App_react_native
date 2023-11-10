import { useContext } from "react";
import {View,Text,StyleSheet, FlatList} from "react-native";
import { Context } from "../../context";
import FavouriteItem from "../../components/FavouriteItem";

export default function Favourite(){
    const {favouriteItem} = useContext(Context);
    //  console.log(favouriteItem);
    if(!favouriteItem){
       return (
        <View style={styles.noFav}>
            <Text style={styles.noFavText}>No Favourites</Text>
        </View>
       )
    }

    return (
        <View style={styles.favouriteItemMain}>
            <FlatList
            data={favouriteItem}
            renderItem={(itemdata)=> <FavouriteItem 
            title={itemdata.item.title}
            reason={itemdata.item.reason}
            />}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    favouriteItemMain:{
      paddingHorizontal:16,
      paddingVertical:30,
    },
    noFav:{
       padding:20,
       alignItems:"center"
    },
    noFavText:{
     fontSize:20,
     fontWeight:"bold",
     color:"black"
    }
})