import { useContext } from "react"
import { cartContext } from "../context/cartContext"
import { db } from "../api/firebaseApi"

const Cart = () => {

    const context = useContext(cartContext)
    console.log("log desde cart.js")
    console.log(context)

    return (
        <div>
            {context.cart.map(prod => { return (
                <div>
                    <h1>{prod.name}</h1>
                    <h1>Detalle del producto</h1>
                    <p>{prod.description}</p>
                    <img src="https://via.placeholder.com/300" alt="" />
                    <p>Precio : ${prod.price}</p>
                    <p>Cantidad : {prod.quantity}</p>
                    <p>Subtotal : ${prod.price * prod.quantity}</p>
                    {/* <button onClick={context.removeItem(prod.id)}>Eliminar producto</button> */}
                </div>)
            })}
            <div>
                <button onClick={context.clear}>Vaciar carrito</button>
            </div>
        </div>
    )
}

export default Cart