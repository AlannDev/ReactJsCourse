import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import prodsBD from "../../assets/products.json"
import { toast, ToastContainer } from "react-toastify"
import { useParams } from "react-router-dom";
import { db } from "../../api/firebaseApi";
import { collection, getDoc, doc, getDocs, addDoc, query } from "firebase/firestore"

const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const prodsCollection = collection(db, "products")
        toast.info("Cargando Productos...")

        getDocs(prodsCollection)
            .then((result) => {
                const prodsFirebase = result.docs.map((doc => {
                    const prodWithId = doc.data()
                    prodWithId.id = doc.id
                    
                    return prodWithId
                }))
                setProduct(prodsFirebase.find((prod) => prod.id == id))
                setLoading(false)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
            .catch((err) => {
                toast.error(err)
            })
    }, [])

    return (
        <>
            {loading ? <ToastContainer/>  : <ItemDetail product={product}/>}
        </>
    )
}

export default ItemDetailContainer