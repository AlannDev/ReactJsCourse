import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"
import { useContext } from "react"
import { cartContext } from "../context/cartContext"

const Nav = () => {

    const cntxt = useContext(cartContext)

    return (
        <nav className="nav">
            {cntxt.cart.length > 0 ? <CartWidget/> : <div></div>}
            <NavLink to="/products/electro" className="nav__link">Electro</NavLink>
            <NavLink to="/products/tecno" className="nav__link">Tecno</NavLink>
            <NavLink to="/products/ropa" className="nav__link">Ropa</NavLink>
        </nav>
    )
}

export default Nav