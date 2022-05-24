import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import prodsBD from "../../assets/products.json"
import { toast, ToastContainer } from "react-toastify"
import { useParams } from "react-router-dom";
import { db } from "../../api/firebaseApi";
import { collection, getDoc, doc, getDocs, addDoc, query, where } from "firebase/firestore"

const ItemDetailContainer = () => {
    
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const prodsCollection = collection(db, "products")
        const referenceDoc = doc(prodsCollection, id)
        toast.info("Cargando Productos...")

        getDoc(referenceDoc)
            .then((result) => {
                const prodsFirebase = result.data()
                prodsFirebase.id = id
                setProduct(prodsFirebase)
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