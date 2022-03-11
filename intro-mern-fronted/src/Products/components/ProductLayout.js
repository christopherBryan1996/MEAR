import React from 'react'
import Header from './Header'
import AddButton from './AddButton'
import ListProducts from './ListProducts'

const ProductLayout = ()=>{
    return (
        <>
            <Header title="product app"/>
            <AddButton/>
            <ListProducts/>
        </>
    )
}

export default ProductLayout