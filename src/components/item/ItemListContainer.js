import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList";
//import ProdsBD from "./products.json"

const prodsBD = [
    {
        "id": 1,
        "name": "Camisa",
        "price": 1000,
        "categories": [
            "camisas",
            "remeras"
        ],
        "image": "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg",
        "description": "Camisa de algodon"
    },
    {
        "id": 2,
        "name": "Pantalon",
        "price": 1600,
        "categories": [
            "pantalones",
            "jeans"
        ],
        "image": "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg",
        "description": "Pantalon de algodon"
    },
    {
        "id": 3,
        "name": "Zapatos",
        "price": 3000,
        "categories": [
            "zapatos",
            "sandalias"
        ],
        "image": "https://www.mismarcas.com/wp-content/uploads/2019/10/camiseta-mismarcas-nike-air-max-1-negra-1.jpg",
        "description": "Zapatos de algodon"
    }
]

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        // const allProducts = fetch("https://fakestoreapi.com/products")
        // allProducts.then((res) => {
        //     return res.json()
        // })
        // .then((json) => {
        //     console.log(json)
        //     setProducts(json)
        // })
        // .catch((err) => {
        //     console.log(err)
        // })

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
            setProducts(prodsBD)
            setLoading(false)
        })
        .catch((error) => {
            console.log("Error")
        })

    }, [])

    const onAdd = () => { };

    if(loading){
        <p>Cargando...</p>
    }else {
        return (
            <ItemList products={products} />
        )
    }

    // return (
    //     <div>
    //         {/* <p>{props.greeting}</p> */}
    //         {/* <ItemCount stock={50} init={1} onAdd={onAdd}/> */}
    //         {/* <ul>
    //             {productos.map((prod, index) => {
    //                 return <li key={prod.id}>{prod.nombre}</li>
    //             })}
    //         </ul> */}
    //     </div>
    // )
}
export default ItemListContainer