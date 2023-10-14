import { useReducer , useContext, createContext } from "react";
import { Action } from "./Action";



// State 
let initialState = {
    transaction: []
}
export const globalContext = createContext(initialState)

export const Provider = ({children}) => {
    const [state , dispatch] = useReducer(Action, initialState)


    
    // Actions Functions
    function add(dis,amount,id){
        dispatch({
            type: "ADD",
            dis,
            amount,
            id
        })
    }
    function remove(id){
        dispatch({
            type: "REMOVE",
            id
        })
    }

    return (
        <globalContext.Provider value={{
            transaction: state.transaction,
            add,
            remove
        }}>
            { children }
        </globalContext.Provider>
    )
}