///////////////////////////////////////////////////////////////
import { createContext,useContext,useReducer } from "react"
///////////////////////////////////////////////////////////////
const AppContext = createContext()

const useAppContext = () => useContext( AppContext )

const initialState = { items:[],total:0 }

const reducer = ( state, action ) => {

    console.log( action )

    switch (action.type) {
        
        case "AddTodoList": return {
                ...state,
                total: state.total + 1,
                items:[ ...state.items,action.value ]
        }


        case "DelTodoList": 
        let new_list = state.items.slice()
            new_list.splice(action.value.index,1)

        return {
                ...state,
                total: state.total -1,
                items: new_list
        } 
    
        default: return state
    }


}

////////////////////////////////////////////
const AppProvider = ( { children } ) => {


    const [ state,dispatch ] = useReducer(reducer,initialState)
    
    return(
        <AppContext.Provider value={ {items:state.items ,total:state.total,dispatch} }>
            {children}
        </AppContext.Provider>
    )

}
////////////////////////////////////////////
export { AppProvider, useAppContext }
////////////////////////////////////////////
