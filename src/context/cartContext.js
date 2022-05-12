import { createContext, useState } from "react";
export const cartContext = createContext()
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
        // console.log(isInCart(prod.id))
        // if (isInCart(prod.id)){
        //     const newCart = [...cart];
        //     for (const item of newCart){
        //         if (item.id == prod.id){
        //             item.quantity=+
        //         }
        //     }
        //     setCart(newCart)
        // } else {
        //     setCart([
        //         ...cart,
        //         {
        //             prod: prod
        //         }
        //     ])
        // }
        if(isInCart(prod.id)){
            console.log("producto en carrtio")
        }
        else {
            console.log("producto en carrtio else")
            setCart(cart.push(prod))
        }
    }

    const isInCart = (id) => {
        return cart.find(prod => prod.id == id);
    }

    const removeItem = (id) => {
        const updatedCart = [...cart].map(item => item.id != id);
        setCart(updatedCart);
    }

    const clear = () => {
        setCart([])
    }

    const valorDelContexto = {
        addItem ,
        isInCart ,
        removeItem ,
        clear
      }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartProvider