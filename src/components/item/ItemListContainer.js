import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import prodsBD from "../../assets/products.json"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom";
import { db } from "../../api/firebaseApi";
import { collection, getDoc, doc, getDocs, addDoc, query } from "firebase/firestore"

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {nameCategory} = useParams()

    useEffect(() => {

        const prodsCollection = collection(db, "products")
        toast.info("Cargando Productos...")

        if(nameCategory == undefined)
        {
            getDocs(prodsCollection)
            .then((result) => {
                const prodsFirebase = result.docs.map((doc => {
                    // const prodWithId = {
                    //     ...doc.data(),
                    //     id: doc.id
                    // }
                    const prodWithId = doc.data()
                    prodWithId.id = doc.id
                    
                    return prodWithId
                }))
                setProducts(prodsFirebase)
                setLoading(false)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
            .catch((err) => {
                toast.error(err)
            })
            .finally(() => {

            })
        }
        else {
            getDocs(prodsCollection)
            .then((result) => {
                const prodsFirebase = result.docs.map((doc => {
                    const prodWithId = doc.data()
                    prodWithId.id = doc.id
                    
                    return prodWithId
                }))
                setProducts(prodsFirebase.filter((prod) => { return prod.categories.includes(nameCategory) }))
                setLoading(false)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
            .catch((err) => {
                toast.error(err)
            })
            .finally(() => {

            })
        }

    }, [nameCategory])

    const onAdd = () => { };

    if(loading){
        <p>Cargando...</p>
    }else {
        return (
            <ItemList products={products} />
        )
    }
}

export default ItemListContainer