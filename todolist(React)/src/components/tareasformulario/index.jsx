////////////////////////////////////////////////////////////
import { useAppContext } from "../../provider/appprovider"
////////////////////////////////////////////////////////////
const TareasFormulario = ( ) => {

    const { dispatch } = useAppContext()

    const handleSubmit = ( event ) => {

        event.preventDefault()

        const input = document.querySelector("#inputlist").value 
        if(input.length > 0 )
        {
            const obj = { nombre:input }
            dispatch({type:"AddTodoList",value:obj})
        }

        event.target.reset()
    }
 
    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input id="inputlist" type="text" className="form-control" placeholder="Ingrese Tarea" />
        </form>
    )
}
////////////////////////////////////////////////////////////
export default TareasFormulario
////////////////////////////////////////////////////////////