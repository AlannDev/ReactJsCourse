import { Link } from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

const CartWidget = () => {

    const cntxt = useContext(cartContext)

    const totalItems = cntxt.cart.reduce((total, currentValue) => total = parseInt(total) + parseInt(currentValue.quantity),0);
    console.log(totalItems)
    console.log("log form cardwidget.js")

    return (
        <Link to="/cart">
            <img className="cartWidget" src={require("../assets/shopping-cart.png")} alt="carrito-logo"></img>
            <span>{totalItems}</span>
        </Link>
    )
}

export default CartWidget