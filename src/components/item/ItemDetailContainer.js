import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import prodsBD from "../../assets/products.json"
import { toast } from "react-toastify"

const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const idFilterProduct = 2

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            console.log("Pidiendo Productos...")
            setTimeout(()=>{
                res(prodsBD)
            },2000)
        })

        promesa
        .then(() => {
            console.log("Recibiendo Productos...")
            console.log(prodsBD)
            setProduct(prodsBD.find((prod) => prod.id == idFilterProduct))
            setLoading(false)
            toast.dismiss()
            toast.success("Productos cargados!")
        })
        .catch((error) => {
            console.log("Error")
        })
    })

    return (
        <>
            {loading ? <p>Cargando...</p> : <ItemDetail product={product}/>}
        </>
    )
}

export default ItemDetailContainer