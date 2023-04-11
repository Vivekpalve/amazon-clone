import { createContext, useReducer, useContext } from "react";

//prepares the dataLayer
export const StateContext = createContext();

//wrap our app and provide the dara layer
export const StateProvider = ({ reducer, initialState, children }) => {
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>;
};

//pull infromation from the data layer
export const useStateValue = () => useContext(StateContext);
