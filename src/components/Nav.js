import CartWidget from "./CartWidget";

const Nav = () => {

    return (
        <nav className="nav">
            <CartWidget/>
            <a href="#" className="nav__link"> link 1</a>
            <a href="#" className="nav__link"> link 2</a>
            <a href="#" className="nav__link"> link 3</a>
        </nav>
    )
}

export default Nav