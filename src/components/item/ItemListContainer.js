import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import prodsBD from "../../assets/products.json"
import { toast } from "react-toastify"
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {nameCategory} = useParams()

    useEffect(() => {
        toast.info("Cargando Productos...")

        if(nameCategory == undefined)
        {
            const promesa = new Promise((res) => {
                setTimeout(()=>{
                    res(prodsBD)
                },1000)
            })
            .then(() => {
                setProducts(prodsBD)
                setLoading(false)
                toast.dismiss()
                toast.success("Productos cargados!")
            })
        }
        else {
            const promesa = new Promise((res) => {
                setTimeout(()=>{
                    res(prodsBD)
                },1000)
            })
            .then(() => {
                setProducts(prodsBD.filter((prod) => {
                    return prod.categories.includes(nameCategory)
                }))
                setLoading(false)
                toast.dismiss()
                toast.success("Productos cargados!")
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