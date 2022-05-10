import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {

    const [cantidadItemsCarrito, setCantidadItemsCarrito] = useState(0)
    const [renderCart, setRenderCart] = useState(false)

    const onAdd = (e) => {
        setCantidadItemsCarrito(e)
        setRenderCart(true)
    }

    useEffect(() =>{
    },[cantidadItemsCarrito])

    if (!renderCart) {
        return (
            <div>
                <h1>Detalle del producto</h1>
                <p>{product.description}</p>
                <img src="https://via.placeholder.com/300" alt="" />
                <p>Precio : ${product.price}</p>
                <ItemCount init={1} stock={product.stock} onAdd={onAdd} />
                {/* <button>terminar mi compra</button> */}
            </div>
        )
    }
    else {
        return(
            <div>
                <Link to="/cart"> <button>Finalizar compra</button></Link>
                <p>cantidad: {cantidadItemsCarrito} </p>
            </div>
        )
    }
}

export default ItemDetail