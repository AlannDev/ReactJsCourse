import Item from "./Item"

const ItemList = ({products}) => {
    return (
        <section className="card-container">
            {products.map(prod => {
                return (
                    <Item key={prod.id} product={prod} />
                )
            })}
        </section>
    )
}

export default ItemList