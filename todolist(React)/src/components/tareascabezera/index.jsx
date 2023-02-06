import { useAppContext } from "../../provider/appprovider"

/////////////////////////////////////
const TareasCabezera = ( ) => {

    const { total } =  useAppContext()
 
    return (

        <div className="alert alert-warning text-center">
            <span className="d-block">Tareas: #{ total }</span>
        </div>
    )
    

}
/////////////////////////////////////
export default TareasCabezera
/////////////////////////////////////