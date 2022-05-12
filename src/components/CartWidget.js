import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

const CartWidget = () => {

    const {cart, addItem, clearCart, removeItem} = useContext(cartContext)
    console.log(cart, addItem, clearCart, removeItem)

    return (
        <Link to="/cart">
            <img className="cartWidget" src={require("../assets/shopping-cart.png")} alt="carrito-logo"></img>
        </Link>
    )
}

export default CartWidget