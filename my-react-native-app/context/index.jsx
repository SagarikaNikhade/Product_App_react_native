// Create context
// Provide context
// consume context
import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const ProductContext = ({children}) =>{
    // list of products
    const [product,setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

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

    console.log(product)

    return (
        <Context.Provider value={{product,loading}}>
            {children}
        </Context.Provider>
    )
}

export default ProductContext;