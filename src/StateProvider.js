
import React ,{createContext, useContext, useReducer} from "react";

//this is a data layer 
export const StateContext =  createContext();

//build a provider , these are like a global variable
export const StateProvider = ({reducer, initialState,children}) => (
  <StateContext.Provider value= {useReducer(reducer,initialState)}>  
      {children}
  </StateContext.Provider>
)
// reducer,initialState are like store here. 

export const useStateValue = () => useContext(StateContext);