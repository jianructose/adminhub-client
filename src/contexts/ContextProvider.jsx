import { createContext, useContext, useState } from "react";

// create a context to store the state so that it can be accessed by other components
const StateContext = createContext();

// define initial state
const initialState = {
  chat: false,
  userProfile: false,
  notification: false,
};

function ContextProvider({ children }) {
  // use the useState hook to update the state. start from true
  const [activeMenu, setActiveMenu] = useState(true);

  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({
      ...initialState,
      [clicked]: !isClicked[clicked],
    });
  };

  const [screenWidth, setScreenWidth] = useState(undefined);

  return (
    // this value will be passed to all the children components
    <StateContext.Provider
      value={{
        activeMenu, // this is the state
        setActiveMenu, // this function will be used to update the state
        isClicked,
        setIsClicked, // add setisclicked so that the state can be updated
        handleClick, // add the handleClick function
        screenWidth,
        setScreenWidth,
      }}
    >
      {/* always return the children components */}
      {children}
    </StateContext.Provider>
  );
}

// use this function to access the state in the components
function useStateContext() {
  return useContext(StateContext);
}

export { ContextProvider, useStateContext };
