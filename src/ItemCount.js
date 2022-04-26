import { useState } from "react"

const ItemCount = ({init, stock, onAdd}) => {

    const [contador, setContador] = useState(init)
    const [stockReal, setStock] = useState(stock)

    const sumar = () => {
        if(contador < stockReal) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if(contador > 0) {
            setContador(contador - 1)
        }
    }

    const addCarrito = () => {
        setStock(stockReal - contador)
        console.log("add carrito")
    }

    return (
        <div>
            <p>Stock disponible: {stockReal}</p>
            <p>Unidades a comprar: {contador}</p>
            <button className="btnAdd" onClick={sumar}>+</button>
            <button onClick={addCarrito}>confirmar</button>
            <button className="btnDelete" onClick={restar}>-</button>
        </div>
    )
}

export default ItemCount