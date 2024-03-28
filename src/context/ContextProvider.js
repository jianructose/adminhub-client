import { createContext, useContext, useState } from "react";

// create a context to store the state so that it can be accessed by other components
const StateContext = createContext();

// define initial state
const initialState = {
  userProfile: false,
  notification: false,
};

ContextProvider = ({ children }) => {
  const state = useContext(StateContext); // get the state from the context

  return { children };
};
