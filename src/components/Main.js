import { Routes, Route } from "react-router-dom"
import ItemListContainer from "./item/ItemListContainer"
import ItemDetailContainer from "./item/ItemDetailContainer"
import Cart from "./Cart"

const Main = () => {
    return (
        <main>
            {/* <ItemListContainer greeting={saludo}/> */}
            {/* <ItemDetailContainer/> */}
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/products/:nameCategory" element={<ItemListContainer/>} />
                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </main>
    )
}

export default Main