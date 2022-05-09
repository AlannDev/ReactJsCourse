import { useState } from "react"

const ItemCount = ({init, stock, onAdd}) => {

    const [contador, setContador] = useState(init)
    const [stockReal, setStock] = useState(stock)

    const addItem = () => {
        if(contador < stockReal) {
            setContador(contador + 1)
        }
    }

    const removeItem = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }

    const addToCart = () => {
        if((stockReal - contador) >= 0){
            setStock(stockReal - contador)
        }
        onAdd(contador)
    }

    return (
        <div>
            <p>Stock disponible: {stockReal}</p>
            <p>Unidades a comprar: {contador}</p>
            <button className="btnAdd" onClick={addItem}>+</button>
            <button onClick={addToCart}>Agregar al carrito</button>
            <button className="btnDelete" onClick={removeItem}>-</button>
        </div>
    )
}

export default ItemCount