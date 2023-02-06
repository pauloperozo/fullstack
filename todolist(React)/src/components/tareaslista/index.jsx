/////////////////////////////////////
import './index.css'
import { useAppContext } from "../../provider/appprovider"
/////////////////////////////////////
const TareasLista = ( ) => {

    const { items, dispatch } =  useAppContext()

    const handleDone = (index) => {
        document.querySelectorAll(".items")[index].classList.add("tachado")
    }

    const handleDel = (index) => dispatch({type:"DelTodoList",value:{index}})
    


    const lista = items.map( ( row,index ) =>
        <li className='items' key={index} >
            <span>{row.nombre}</span> 
            <span>&nbsp;&nbsp;</span>
            <span onClick={ () => handleDone(index) } class="badge bg-secondary"> &#10003; </span> 
            <span>&nbsp;&nbsp;</span>
            <span onClick={ () => handleDel(index) } class="badge bg-secondary"> - </span> 
        </li>
    )    

    return (
        <div>
            <hr/>
            <div id="global">
                <div id="mensajes">
                    <ul>{lista}</ul>
                </div>
            </div>
        </div>
    )
}
/////////////////////////////////////
export default TareasLista
/////////////////////////////////////