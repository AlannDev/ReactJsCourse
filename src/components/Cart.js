import { useContext, useState } from "react"
import { cartContext } from "../context/cartContext"
import { db } from "../api/firebaseApi"
import { collection, getDoc, doc, getDocs, addDoc, query, where } from "firebase/firestore"

const Cart = () => {

    const context = useContext(cartContext)
    const [idOrder, setIdOrder] = useState("")
    console.log("log desde cart.js")
    console.log(context)

    const createOrder = () => {
        const ordersCollection = collection(db, "orders")
        const d = new Date();

        const order = {
            buyer: {
                name: "Lenny",
                phone: "1159204411",
                email: "lenny.testing@gmail.com"
            },
            items: context.cart,
            date: d.toLocaleDateString(),
            total: 0 
        }

        addDoc(ordersCollection, order)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

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
            <div>
                <button onClick={createOrder}>Finalizar compra</button>
            </div>
        </div>
    )
}

export default Cart