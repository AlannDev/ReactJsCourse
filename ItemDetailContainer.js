import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const item = {
    "id" : 1,
    "nombre" : "Camisa",
    "precio" : 50,
    "categorias" : ["camisas","remeras"],
    "imagen" : "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg",
    "description" : "Camisa de algodon"
}

const ItemDetailContainer = () => {

  const [cargando,setCargando] = useState(true)
    const [producto,setProductos] = useState({})

    useEffect(() =>{
        const pedido = new Promise((res)=>{
          setTimeout(()=>{
            res(item)
          },2000 )
        })
    
      pedido.then(() =>{
        setCargando(false)
        setProductos(item)
      })},[])

      if(cargando){
        return(
          <p>Cargando...</p>
        )
      }else{
        return (
          <div>
            <ItemDetail item={producto}/>  
          </div>
        )
      }
}

export default ItemDetailContainer

