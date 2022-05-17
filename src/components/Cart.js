import { useContext } from "react"
import { cartContext } from "../context/cartContext"

const Cart = () => {

    const context = useContext(cartContext)
    console.log("log desde cart.js")
    console.log(context)

    return (
        <div>Detalle Carrito...
            {context.cart.map(prod => {
                <div>
                    <p>{prod.name}</p>
                    <h1>Detalle del producto</h1>
                    <p>{prod.description}</p>
                    {/* <img src="https://via.placeholder.com/300" alt="" /> */}
                    <p>Precio : ${prod.price}</p>
                    <p>Cantidad: {prod.quantity}</p>
                    <p>Subtotal: ${prod.price * prod.quantity}</p>
                </div>
            })}
        </div>
    )
}

export default Cart