import { createContext, useState } from "react";
export const cartContext = createContext([])
const {Provider} = cartContext

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]) 

    const addItem = (prod) => {
        if(isInCart(prod.id)){
            const products = [...cart]
            for (const item of products){
                if (item.id === prod.id){
                    item.quantity = item.quantity + prod.quantity;
                }
            }
            setCart(products)
        }
        else {
            setCart([...cart, prod])
        }
    }

    const isInCart = (id) => {
        return cart.find(prod => prod.id === id);
    }

    const removeItem = (id) => {
        setCart(cart.filter(producto => producto.id !== id))
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