import ItemListContainer from "./item/ItemListContainer"
import ItemDetailContainer from "./item/ItemDetailContainer"

const saludo = "Saludos desde el Main"

const Main = () => {
    return (
        <main>
            {/* <ItemListContainer greeting={saludo}/> */}
            <ItemDetailContainer/>
        </main>
    )
}

export default Main