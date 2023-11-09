import {View,Text,StyleSheet,ActivityIndicator} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import ProductDetailsItem from "../../components/ProductDetailsItem";


export default function ProductDetails(){
    const route = useRoute();
    // console.log(route.params)
    const {productId} = route.params;
    const [loading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState([]);

    useEffect(()=>{
        setLoading(true);
        async function getData(){
          const api = await fetch(`https://dummyjson.com/products/${productId}`);
          const finalData = await api.json();

          if(finalData){
            setLoading(false);
            setDetailData(finalData)
          }
        }
        getData()
    },[])

    console.log(detailData);

    if(loading){
        return(
            <ActivityIndicator style={styles.loader} color="red" size={"large"}/>
        )
    }
    
    return (
        <View>
            <ProductDetailsItem detailData={detailData}/>
        </View>
    )
}


const styles = StyleSheet.create({
    loader : {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})