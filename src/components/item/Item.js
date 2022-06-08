import { useNavigate } from "react-router-dom"

const Item = ({product}) => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/product/${product.id}`)
    }
    return (
        <article className="card">
            <h3>{product.name}</h3>
            <img src="https://via.placeholder.com/300" alt="card" />
            <p>Precio : ${product.price}</p>
            <p>Categorias : {product.categories.map(category => {
                return <span key={category}>{category}</span>
            })} </p>
            <button onClick={handleClick}>ver mas</button>
        </article>
    )
}

export default Item