import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
  const [producto,setProducto] = useState({})

  useEffect(()=>{
  })


  return (
    <p>Cargando...</p>
  )
}

export default ItemDetailContainer

