import { Link } from "react-router-dom"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <h1 className="header__title">E-commerce</h1>
            </Link>
            <Nav/>
        </header>
    )
}

export default Header