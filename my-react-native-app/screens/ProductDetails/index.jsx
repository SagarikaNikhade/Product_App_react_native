import { View, Text, StyleSheet, ActivityIndicator, Button, Modal, Pressable, TextInput } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import ProductDetailsItem from "../../components/ProductDetailsItem";
import { Context } from "../../context";


export default function ProductDetails() {
    const route = useRoute();
    // console.log(route.params)
    const { productId } = route.params;
    const navigation = useNavigation();
    // Loading
    const [loading, setLoading] = useState(false);
    const [detailData, setDetailData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [reason,setReason] = useState("");
    const {AddToFav,favouriteItem} = useContext(Context);

    // update fav
    const IsFavPresent = favouriteItem && favouriteItem.length > 0 ? 
        favouriteItem.filter(item=>item.id === productId) : false;

    useEffect(() => {
        setLoading(true);
        async function getData() {
            const api = await fetch(`https://dummyjson.com/products/${productId}`);
            const finalData = await api.json();

            if (finalData) {
                setLoading(false);
                setDetailData(finalData)
            }
        }
        getData()
    }, []);

    // For Add fav button
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                    <Button onPress={() => setModalVisible(true)} title={favouriteItem && favouriteItem.length > 0 ? "Update Favourite" : "Add To Favourite"} />
                )
            }
        })
    }, [])

    // console.log(detailData);

    if (loading) {
        return (
            <ActivityIndicator style={styles.loader} color="red" size={"large"} />
        )
    }

    const handleonChange = (answerText) =>{
      setReason(answerText)
    };

    return (
        <View>
            <ProductDetailsItem detailData={detailData} />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput 
                        placeholder="Why You Like This Product?"
                        onChangeText={handleonChange}
                        value={reason}
                        style={styles.reasonTextInput}
                        />
                        {/* <Text style={styles.modalText}>Hello World!</Text> */}
                        <View style={styles.buttonWrapper}>
                        <Pressable
                            style={[styles.button, styles.buttonOpen]}
                            onPress={() =>{
                                AddToFav({productId,reason})
                                setModalVisible(!modalVisible)
                            }}>
                        <Text style={styles.textStyle}>{favouriteItem && favouriteItem.length > 0 ? "Update" : "Add"}</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 1,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonWrapper: {
     flexDirection: "row",   
    },
    button: {
        borderRadius: 1,
        padding: 10,
        elevation: 2,
        marginTop:10,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
        marginRight:5,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
        marginLeft:5,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    reasonTextInput:{
      borderRadius:1,
      borderWidth:1,
      padding:10,
    }
});