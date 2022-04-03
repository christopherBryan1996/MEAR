import React,{useState,useEffect} from "react";
import Loading from "./Loading";
import {getProducts} from "../services";

const ListProducts= ()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts]=useState([])

    useEffect(()=>{
        async function loadProducts(){
            const response= await getProducts()

            if(response.status === 200){
                setProducts(response.data.products)
            }
        }
        loadProducts()
        setIsLoading(false)
    },[])
    console.log(products)
    return (
        
        isLoading ? <Loading/>:'Mostrar lista'
        
    )
}

export default ListProducts