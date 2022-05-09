const ItemDetail = ({product}) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ItemDetail