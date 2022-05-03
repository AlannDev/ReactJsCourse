const ItemDetail = (item) => {
    return (
      <div>
        <p>{item.nombre}</p>
        <p>Descripcion: {item.description}</p>
        <img src={item.imagen} alt="card"/>
        <p>Precio: {item.precio}</p>
      </div>
    )
  }
  
  export default ItemDetail