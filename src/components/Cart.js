import { useContext, useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { cartContext } from "../context/cartContext"
import { db } from "../api/firebaseApi"
import { collection, addDoc } from "firebase/firestore"
import { toast } from "react-toastify"

const Cart = () => {

    const context = useContext(cartContext)
    const [idOrder, setIdOrder] = useState("")
    const [total, setTotal] = useState(0)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const nameInput = useRef(null);
    const phoneInput = useRef(null);
    const emailInput = useRef(null);

    const validUserInfo = () => {
        if (name === '') {
            nameInput.current.focus()
            toast.error("Falta cargar nombre")
            return false
        }
        if (phone === '') {
            phoneInput.current.focus()
            toast.error("Falta cargar telefono")
            return false
        } 
        if (email === '') {
            emailInput.current.focus()
            toast.error("Falta cargar email")
            return false
        }
        return true
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangePhone = (e) => {
        setPhone(e.target.value)
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const createOrder = () => {
        if (validUserInfo()) {
            const ordersCollection = collection(db, "orders")
            const d = new Date();


            const order = {
                buyer: {
                    name: name,
                    phone: phone,
                    email: email
                },
                items: context.cart,
                date: d.toLocaleDateString(),
                total: 0
            }

            addDoc(ordersCollection, order)
                .then((res) => {
                    setIdOrder(res.id)
                    context.clear()
                })
                .catch((err) => {
                    toast.error(err)
                })
        }
        else {

        }
    }

    useEffect(() => {
        let sum = 0
        context.cart.map(prod => {
            return sum += (prod.price * prod.quantity)
        })
        setTotal(sum)
    }, [context])

    return (
        <div>
            {context.cart.length > 0 ?

                <div>
                    {context.cart.map(prod => {
                        return (
                            <div key={prod.id}>
                                <h1>{prod.name}</h1>
                                <h1>Detalle del producto</h1>
                                <p>{prod.description}</p>
                                <img src="https://via.placeholder.com/300" alt="foto-prod" />
                                <p>Precio : ${prod.price}</p>
                                <p>Cantidad : {prod.quantity}</p>
                                <p>Subtotal : ${prod.price * prod.quantity}</p>
                                <button onClick={() => { context.removeItem(prod.id) }}>Eliminar producto</button>
                            </div>)
                    })}

                    <hr className="rounded"></hr>
                    <div>
                        <button onClick={context.clear}>Vaciar carrito</button>
                    </div>
                    <div>
                        <h2>TOTAL: {total}</h2>
                        <form >
                            <h4>Nombre:</h4>
                            <input type="text" placeholder="Nombre" ref={nameInput} onChange={handleChangeName} />
                            <h4>Telefono:</h4>
                            <input type="number" placeholder="Telefono de contacto" ref={phoneInput} onChange={handleChangePhone} />
                            <h4>Email:</h4>
                            <input type="email" placeholder="Correo Electronico" ref={emailInput} onChange={handleChangeEmail} />
                        </form>
                        <button className="btnCreteOrder" onClick={createOrder}>Finalizar compra</button>
                    </div>

                </div> :

                idOrder === "" ? <Link to="/" className="nav__list--link">Volver a Productos </Link> : 
                
                <div>
                    <h1>Orden creada: {idOrder}</h1>
                    <Link to="/" className="nav__list--link">Comprar mas Productos</Link>
                </div>
                
                }
        </div>
    )
}

export default Cart