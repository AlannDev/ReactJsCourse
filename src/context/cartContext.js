import { createContext, useState } from "react";
export const cartContext = createContext([])
const {Provider} = cartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    const addItem = (prod) => {
        console.log(prod)
        if(isInCart(prod.id)){
            setCart([...cart, {...prod, quantity: prod.quantity + 10}])
            console.log(cart)
        }
        else {
            setCart([...cart, prod])
            console.log(cart)
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

    return (
        <Provider value={{cart, addItem, isInCart, removeItem, clear}}>
            {children}
        </Provider>
    )
}

export default CartProvider