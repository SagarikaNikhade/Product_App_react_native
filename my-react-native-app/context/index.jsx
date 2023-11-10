// Create context
// Provide context
// consume context
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({children}) =>{
    // list of products
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    // favourite
    const [favouriteItem,setFavouriteItem] = useState([]);

    const AddToFav = ({productId,reason}) =>{
       let copyFavItems = [...favouriteItem] 
       const index = copyFavItems.findIndex(item =>item.id === productId);
       if(index === -1){
        const getCurrentProductItem = product.find(
          (item) => item.id === productId
        );
        
        copyFavItems.push({
          title: getCurrentProductItem.title,
          id : productId,
          reason
         })
       }
       setFavouriteItem(copyFavItems)
    }

    useEffect(()=>{
      setLoading(true);
        async function getData(){
          const api = await fetch("https://dummyjson.com/products");
          const finalData = await api.json();

          if(finalData){
            // here products is from api
            setTimeout(()=>{
              setLoading(false);
            },2000)
            setProduct(finalData.products)
          }
        }
        getData()
    },[])

    //  console.log(favouriteItem)

    return (
        <Context.Provider value={{product,loading,AddToFav,favouriteItem}}>
            {children}
        </Context.Provider>
    )
}

export default ProductContext;