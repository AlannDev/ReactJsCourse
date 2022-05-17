import { createContext, useState } from "react";
export const cartContext = createContext([])
const {Provider} = cartContext

const CartProvider = ({children}) => {

    // const [carrito, setCarrito] = useState([])
    // const [cantidad_total, setCantidad_total] = useState(0)
    // const [precio_total, setPrecio_total] = useState(0)
    
    // const valorDelContext = {
    //     cantidad_total: 1,
    //     precio_total: 0,
    //     carrito: []
    // }

    const [cart, setCart] = useState([]) 

    const addItem = (prod) => {
        console.log(prod)
        if(isInCart(prod.id)){
            console.log("producto en carrtio")
            setCart([...cart, {prod: prod}])
            console.log(cart)
        }
        else {
            console.log("producto no esta en carrito")
            setCart([...prod])
            console.log(cart)
        }
    }

    const isInCart = (id) => {
        return true
        //return cart.find(prod => prod.id == id);
    }

    const removeItem = (id) => {
        const updatedCart = [...cart].map(item => item.id != id);
        setCart(updatedCart);
    }

    const clear = () => {
        setCart([])
    }

    return (
        <Provider value={{cart, addItem, isInCart, removeItem, clear}}>
            {children}
        </Provider>
    )
}

export default CartProvider