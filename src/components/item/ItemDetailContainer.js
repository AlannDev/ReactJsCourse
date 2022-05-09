import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import prodsBD from "../../assets/products.json"
import { toast, ToastContainer } from "react-toastify"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const {id} = useParams()
    const idFilterProduct = 2

    useEffect(() => {
        toast.info("Cargando Productos...")
        const promesa = new Promise((res, rej) => {
            console.log("Pidiendo Productos...")
            setTimeout(()=>{
                res(prodsBD)
            },2000)
        })
        .then(() => {
            console.log("Recibiendo Productos...")
            console.log(prodsBD)
            setProduct(prodsBD.find((prod) => prod.id == id))
            setLoading(false)
            toast.dismiss()
            toast.success("Productos cargados!")
        })
        .catch((error) => {
            console.log("Error")
        })
    }, [])

    return (
        <>
            {loading ? <ToastContainer/>  : <ItemDetail product={product}/>}
        </>
    )
}

export default ItemDetailContainer