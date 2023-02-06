///////////////////////////////////////////////////////////
import './App.css'
import TareasCabezera from './components/tareascabezera'
import TareasFormulario from './components/tareasformulario'
import TareasLista from './components/tareaslista'
import { AppProvider } from './provider/appprovider'
///////////////////////////////////////////////////////////
function App() {
  
  return (

    <div>
      <AppProvider>
        <TareasCabezera></TareasCabezera> 
        <TareasFormulario></TareasFormulario>  
        <TareasLista></TareasLista>
      </AppProvider> 
    </div>

  )
}
///////////////////////////////////////////////////////////
export default App
///////////////////////////////////////////////////////////