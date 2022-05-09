import { Link } from "react-router-dom"

const CartWidget = () => {
    return (
        <Link to="/cart">
            <img className="cartWidget" src={require("../assets/shopping-cart.png")} alt="carrito-logo"></img>
        </Link>
    )
}

export default CartWidget