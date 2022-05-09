import CartWidget from "./CartWidget";
import {NavLink} from "react-router-dom"

const Nav = () => {

    return (
        <nav className="nav">
            <CartWidget/>
            <NavLink to="/products/electro" className="nav__link">Electro</NavLink>
            <NavLink to="/products/tecno" className="nav__link">Tecno</NavLink>
            <NavLink to="/products/ropa" className="nav__link">Ropa</NavLink>
        </nav>
    )
}

export default Nav