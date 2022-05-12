import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import prodsBD from "../../assets/products.json"
import { toast, ToastContainer } from "react-toastify"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        toast.info("Cargando Productos...")
        const promesa = new Promise((res, rej) => {
            setTimeout(()=>{
                res(prodsBD)
            },2000)
        })
        .then(() => {
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