import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

const Main = () => {

    const onAdd = () => {
        
    }

    return (
        <main>
            <ItemListContainer greeting="Saludando!!"/>
            <ItemCount stock={20} init={0} onAdd={onAdd}/>
        </main>
    )
}

export default Main