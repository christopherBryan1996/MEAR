import React,{useState} from "react";
import Loading from "./Loading";

const ListProducts= ()=>{
    const [isLoading, setIsLoading] = useState(false)
    return (
        
        isLoading ? <Loading/>:'Mostrar lista'
        
    )
}

export default ListProducts