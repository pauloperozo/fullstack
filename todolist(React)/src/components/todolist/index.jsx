import { useReducer } from "react"

////////////////////////////////////////////////////
const TodoList = ( props ) => {

    const Agregar = ()=>{}

    const Quitar= ()=>{}

    const Completar = () =>{}

    
    const reducer = (state, action ) => {

        switch (action.type) {
            
            case "AgregarTodoList":
                
            break;

            case "CulminarTodoList":
                
            break;

            case "BorrarTodoList":
                
            break;
        
            default:
                return state
        }

    }


    const [state,dispatch] = useReducer(reducer,[])



    return (
        <div>
            <form >
                <input  placeholder="Ingrese Tarea" />
                <button>Agregar</button>
            </form>

                <ul>
                    <li>Este1</li>
                    <li>Este2</li>
                    <li>Este3</li>
                    <li>Este4</li>    
                </ul>  
        </div>
    )
}
////////////////////////////////////////////////////
export default TodoList
