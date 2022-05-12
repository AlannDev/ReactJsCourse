import { useContext } from "react"
import { cartContext } from "../context/cartContext"

const Cart = () => {

    const context = useContext(cartContext)
    console.log(context)

    return (
        <div>Carrito...
            {context.cart}
        </div>
    )
}

export default Cart